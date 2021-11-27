
import { GoogleStorageService, MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MiaFinder, MiaFinderHttpService, MiaFinderModalService, MiaFinderService, MiaFinderTableComponent, MiaFinderTableConfig, MiaFinderTag } from 'projects/agencycoda/mia-finder/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('tableComp') tableComp!: MiaFinderTableComponent;

  finderSelected?: MiaFinder;
  tableConfig: MiaFinderTableConfig = new MiaFinderTableConfig();

  tags = new MiaPagination<MiaFinderTag>();

  constructor(
    protected finderHttpService: MiaFinderHttpService,
    protected finderModalService: MiaFinderModalService,
    protected miaFinderService: MiaFinderService,
    protected storageService: GoogleStorageService
  ) {

  }

  ngOnInit(): void {
    this.loadTags();
  }

  ngAfterViewInit(): void {
    this.loadExample(4);
  }

  onClickFolder(item: MiaFinder) {
    this.loadExample(item.id);
  }

  onClickMove(item: MiaFinder) {
    this.finderModalService.moveFile(item, this.finderSelected!).subscribe(res => this.loadItems());
  }

  onClickItem(result: { key: string; item: MiaFinder; }) {
    if(result.key == 'click-row' && result.item.type == MiaFinder.TYPE_FOLDER){
      this.loadExample(result.item.id);
    } else if (result.key == 'move-to') {
      this.onClickMove(result.item);
    }
  }

  loadExample(finderId: number) {
    this.finderSelected = undefined;
    this.finderHttpService.fetch(finderId).then(result => {
      this.finderSelected = result;
      this.loadItems();
    });
  }

  loadItems() {
    this.tableConfig.query.resetWhere();
    this.tableConfig.query.addWhere('parent_id', this.finderSelected!.id);
    if(this.tableComp == undefined){
      return;
    }
    this.tableComp.loadItems();
  }

  onUploadEvent($event: any) {
    this.miaFinderService.uploadFiles($event.target.files);
  }

  onUploadCustomEvent($event: any) {
    for (const file of $event.target.files) {
      // Create file
      let item = new MiaFinder();
      item.title = file.name;
      item.size = file.size;
      item.uploadStatus = MiaFinder.UPLOAD_STATUS_IN_PROGRESS;
      item.uploadProgress = 0;
      item.uploadMemory = file;
      item.hasRetry = false;

      // Upload to service
      this.storageService.uploadWithProgressDirect(file).subscribe(data => {
        if (data.type == HttpEventType.UploadProgress) {
          item.uploadProgress = Math.round((100 / data.total) * data.loaded);
        } else if (data.type == HttpEventType.Response) {
          item.uploadMemory = undefined;
          item.url = 'https://storage.googleapis.com/' + 'coda-files' + '/' + data.body.name;

          this.finderHttpService.save(item).then(result => {
            item.id = result.id;
            item.uploadProgress = MiaFinder.UPLOAD_STATUS_SUCCESS;

            this.miaFinderService.uploadCompleted.next(item);
          }).catch(error => {
            item.uploadStatus = MiaFinder.UPLOAD_STATUS_ERROR;
          });

        }
      }, error => {
        item.uploadMemory = file;
        item.uploadStatus = MiaFinder.UPLOAD_STATUS_ERROR;
      });

      this.miaFinderService.uploading.next(item);
    }
  }

  onClickNewFolder() {
    this.finderModalService.newFolder(new MiaFinder());
  }

  onClickNewFileLink() {
    this.finderModalService.newFileLink(new MiaFinder());
  }

  onClickChangeName() {
    let item = new MiaFinder();
    item.id = 1;
    item.title = 'archiov.zip';
    this.finderModalService.changeName(item);
  }

  loadTags() {
    this.finderHttpService.tags(new MiaQuery()).then(result => this.tags = result);
  }

  onClickOpenVisor() {
    let example = new MiaFinder();
    example.id = 23;
    example.title = 'Captura de Pantalla 2021-05-24 a la(s) 11.06.10.pdf';
    example.url = 'https://storage.googleapis.com/valero-files/453_20217420_576_flutter_tutorial.pdf';
    example.size = 5000;

    let example3 = new MiaFinder();
    example3.id = 19;
    example3.title = 'test.cad';
    example3.url = 'https://storage.googleapis.com/valero-files/test.cad';
    example3.size = 300;

    let example2 = new MiaFinder();
    example2.id = 1;
    example2.title = 'sphere.jpg';
    //example2.url = 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg';
    example2.url = 'https://storage.googleapis.com/valero-files/2_2021248_R0012274.JPG';
    example2.size = 50000;
    let items = [example3, example2, example];
    this.finderModalService.openVisor(items);
  }
}
