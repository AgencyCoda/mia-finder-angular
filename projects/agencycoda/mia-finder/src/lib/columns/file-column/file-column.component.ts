import { StringHelper } from '@agencycoda/mia-core';
import { BaseColumnComponent } from '@agencycoda/mia-table';
import { Component, OnInit } from '@angular/core';
import { MiaFinder } from '../../entities/mia-finder';

@Component({
  selector: 'lib-file-column',
  templateUrl: './file-column.component.html',
  styleUrls: ['./file-column.component.css']
})
export class FileColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getIconImage(): string {
    if(this.item.type == MiaFinder.TYPE_FOLDER){
      return '/assets/icons/file-folder.svg';
    } else if (this.item.type == MiaFinder.TYPE_LINK) {
      return '/assets/icons/file-link.svg';
    }
    return '/assets/icons/file-' + StringHelper.getExtension(this.item.url) + '.svg';
  }
}
