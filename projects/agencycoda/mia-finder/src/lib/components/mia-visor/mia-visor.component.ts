import { StringHelper } from '@agencycoda/mia-core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MiaFinder } from '../../entities/mia-finder';

@Component({
  selector: 'lib-mia-visor',
  templateUrl: './mia-visor.component.html',
  styleUrls: ['./mia-visor.component.scss']
})
export class MiaVisorComponent implements OnInit {

  isLoading = false;

  constructor(
    protected dialogRef: MatDialogRef<MiaVisorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MiaFinder,
  ) { }

  ngOnInit(): void {
  }

  onDownload() {
    window.open(this.data.url);
  }

  isImage(): boolean {
    return StringHelper.isImage(this.data.title);
  }

  isVideo(): boolean {
    return StringHelper.isVideo(this.data.title);
  }
}
