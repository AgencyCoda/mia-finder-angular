import { BaseColumnComponent } from '@agencycoda/mia-table';
import { Component, OnInit } from '@angular/core';
import { MiaFinder } from '../../entities/mia-finder';

@Component({
  selector: 'lib-more-finder-column',
  templateUrl: './more-finder-column.component.html',
  styleUrls: ['./more-finder-column.component.css']
})
export class MoreFinderColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  isFolder(): boolean {
    return this.item.type == MiaFinder.TYPE_FOLDER;
  }

  clickButton(actionKey: string, $event: UIEvent) {
    this.config!.onClick.next({ key: actionKey, item: this.item });
    $event.preventDefault();
    return false;
  }
}
