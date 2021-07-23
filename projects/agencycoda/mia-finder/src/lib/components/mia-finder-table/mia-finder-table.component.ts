import { MiaColumn, MiaTableComponent, MiaTableConfig } from '@agencycoda/mia-table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { FileColumnComponent } from '../../columns/file-column/file-column.component';
import { SizeColumnComponent } from '../../columns/size-column/size-column.component';
import { MiaFinder } from '../../entities/mia-finder';
import { MiaFinderHttpService } from '../../services/mia-finder-http.service';

export class MiaFinderTableConfig extends MiaTableConfig {
  columns: Array<MiaColumn> = [
    { key: 'file', type: 'custom', title: 'Name', extra: { component: FileColumnComponent } },
    { key: 'updated_at', type: 'date', title: 'Last Update', field_key: 'updated_at' },
    { key: 'size', type: 'custom', title: 'Size', extra: { component: SizeColumnComponent } },
    { key: 'more', type: 'more', title: '', extra: {
      actions: [
        { icon: 'create', title: 'See', key: 'view' },
        { icon: 'create', title: 'Download', key: 'download' },
        { icon: 'create', title: 'Open Link', key: 'open' },
        { icon: 'move', title: 'Move To', key: 'move-to' },
        { icon: 'create', title: 'Change Name', key: 'change-name' },
        { icon: 'delete', title: 'Delete', key: 'remove' },
      ]
    } }
  ]
}

@Component({
  selector: 'mia-finder-table',
  templateUrl: './mia-finder-table.component.html',
  styleUrls: ['./mia-finder-table.component.css']
})
export class MiaFinderTableComponent implements OnInit {

  @ViewChild('tableComp') tableComp!: MiaTableComponent;

  @Input() tableConfig: MiaFinderTableConfig = new MiaFinderTableConfig();
  @Output() clickItem = new EventEmitter<{ key: string; item: MiaFinder; }>();
  

  constructor(
    protected httpService: MiaFinderHttpService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.tableConfig.service = this.httpService;
    
    this.tableConfig.onClick = new Subject<{ key: string; item: any; }>();
    this.tableConfig.onClick.subscribe(result => {
      this.clickItem.emit(result);
    });
  }

  loadItems() {
    this.tableComp.loadItems();
  }
}
