import { Component } from '@angular/core';
import { MiaFinder, MiaFinderModalService, MiaFinderService } from 'projects/agencycoda/mia-finder/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';

  constructor(
    protected finderModalService: MiaFinderModalService,
    protected miaFinderService: MiaFinderService
  ) {

  }

  onUploadEvent($event: any) {
    this.miaFinderService.uploadFiles($event.target.files);
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
}
