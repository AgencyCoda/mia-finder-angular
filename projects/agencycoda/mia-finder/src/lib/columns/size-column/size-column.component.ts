import { BytesHelper } from '@agencycoda/mia-core';
import { BaseColumnComponent } from '@agencycoda/mia-table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-size-column',
  templateUrl: './size-column.component.html',
  styleUrls: ['./size-column.component.css']
})
export class SizeColumnComponent extends BaseColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  bytesToString() {
    return BytesHelper.toString(this.item.size);
  }
}
