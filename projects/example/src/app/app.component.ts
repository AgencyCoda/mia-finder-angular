
import { MiaPagination, MiaQuery } from '@agencycoda/mia-core';
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
    protected miaFinderService: MiaFinderService
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

  onClickItem(result: { key: string; item: MiaFinder; }) {
    console.log(result);
    if(result.key == 'click-row' && result.item.type == MiaFinder.TYPE_FOLDER){
      this.loadExample(result.item.id);
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
}
