import { GoogleStorageService, MiaGoogleStorage, MIA_GOOGLE_STORAGE_PROVIDER } from '@agencycoda/mia-core';
import { HttpEventType } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MiaFinder } from '../entities/mia-finder';
import { MiaFinderHttpService } from './mia-finder-http.service';

@Injectable({
  providedIn: 'root'
})
export class MiaFinderService {

  uploading = new Subject<MiaFinder>();
  uploadCompleted = new Subject<MiaFinder>();
  allUploadsCompleted = new Subject<boolean>();
  filesCount = 0;


  constructor(
    @Inject(MIA_GOOGLE_STORAGE_PROVIDER) protected config: MiaGoogleStorage,
    protected finderHttpService: MiaFinderHttpService,
    protected storageService: GoogleStorageService
  ) { }

  uploadFiles(files: Array<File>, parentId?: number, extra?: any) {
    this.filesCount = files.length;
    for (let file of files) {
      this.upload(file, parentId, extra);
    }
  }

  escapeFile(file:File):File
  {
    return new File([file], escape(file.name), {type: file.type});
  }

  upload(file: File, parentId?: number, extra?: any)
  {
    file = this.escapeFile(file);
    let item = new MiaFinder();
    item.parent_id = parentId;
    item.title = unescape(file.name);
    item.size = file.size;
    item.uploadStatus = MiaFinder.UPLOAD_STATUS_IN_PROGRESS;
    item.uploadProgress = 0;
    item.uploadMemory = file;

    if(extra != undefined && extra.item_relation_one != undefined){
      item.item_relation_one = extra.item_relation_one;
    }
    if(extra != undefined && extra.item_relation_two != undefined){
      item.item_relation_two = extra.item_relation_two;
    }

    item.extra = extra;

    this.storageService.uploadWithProgressDirect(file).subscribe(data => {
      if (data.type == HttpEventType.UploadProgress) {
        item.uploadProgress = Math.round((100 / data.total) * data.loaded);
      } else if (data.type == HttpEventType.Response) {
        item.uploadMemory = undefined;
        item.url = 'https://storage.googleapis.com/' + this.config.bucket + '/' + escape(data.body.name);
        item.uploadProgress = 100;
        this.save(item);
      }
    }, error => {
      item.uploadMemory = file;
      item.uploadStatus = MiaFinder.UPLOAD_STATUS_ERROR;
    });

    this.uploading.next(item);
  }

  retryUpload(finder: MiaFinder) {
    if(finder.uploadMemory != undefined){
      this.upload(finder.uploadMemory, finder.parent_id);
    } else {
      this.save(finder);
    }
  }

  save(finder: MiaFinder) {
    this.finderHttpService.save(finder).then(result => {
      finder.id = result.id;
      finder.uploadProgress = MiaFinder.UPLOAD_STATUS_SUCCESS;
      this.filesCount--;

      this.allUploadsCompleted.next( this.filesCount<= 0 );
      this.uploadCompleted.next(finder);
    }).catch(error => {
      finder.uploadStatus = MiaFinder.UPLOAD_STATUS_ERROR;
      this.uploadCompleted.next(finder);
    });
  }
}
