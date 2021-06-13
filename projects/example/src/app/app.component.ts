
import { Component, OnInit } from '@angular/core';
import { MiaFinder, MiaFinderHttpService, MiaFinderModalService, MiaFinderService } from 'projects/agencycoda/mia-finder/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  finderSelected?: MiaFinder;

  constructor(
    protected finderHttpService: MiaFinderHttpService,
    protected finderModalService: MiaFinderModalService,
    protected miaFinderService: MiaFinderService
  ) {

  }

  ngOnInit(): void {
    this.loadExample(4);
  }

  onClickFolder(item: MiaFinder) {
    this.loadExample(item.id);
  }

  loadExample(finderId: number) {
    this.finderSelected = undefined;
    this.finderHttpService.fetch(finderId).then(result => {
      this.finderSelected = result;
    });
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
