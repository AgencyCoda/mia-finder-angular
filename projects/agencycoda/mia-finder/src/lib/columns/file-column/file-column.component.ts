import { BaseColumnComponent } from '@agencycoda/mia-table';
import { Component, OnInit } from '@angular/core';

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

}
