import { BytesHelper, StringHelper } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { MiaFinder } from '../../entities/mia-finder';
import { MiaFinderService } from '../../services/mia-finder.service';

@Component({
  selector: 'mia-uploading',
  templateUrl: './mia-uploading.component.html',
  styleUrls: ['./mia-uploading.component.scss']
})
export class MiaUploadingComponent implements OnInit {

  isCollapse = false;
  isActive = false;

  files: Array<MiaFinder> = [];

  constructor(
    protected miaFinderService: MiaFinderService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  retryUpload(file: MiaFinder) {
    this.miaFinderService.retryUpload(file);
    this.removeItem(file);
  }

  removeItem(file: MiaFinder) {
    let index = this.files.indexOf(file);
    if(index > -1){
      this.files.splice(index, 1);
    }
  }

  hideFile(file: MiaFinder) {
    let index = this.files.indexOf(file);
    if(index > -1){
      setTimeout(() => {
        this.files.splice(index, 1);

        if(this.files.length == 0){
          this.isActive = false;
        }
      }, 5000);
    }
  }

  loadConfig() {
    this.miaFinderService.uploading.subscribe(file => {
      this.isActive = true;
      // file.title = escape(file.title);
      // file.url = escape(file.url);
      this.files.push(file);
    });

    this.miaFinderService.uploadCompleted.subscribe(file => {
      this.hideFile(file);
    });
  }

  bytesToString(bytes: number) {
    return BytesHelper.toString(bytes);
  }

  getIconImage(file: MiaFinder): string {
    return '/assets/icons/file-' + StringHelper.getExtension(file.title) + '.svg';
  }
}
