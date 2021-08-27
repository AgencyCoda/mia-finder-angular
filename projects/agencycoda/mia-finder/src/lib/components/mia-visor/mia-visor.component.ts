import { StringHelper } from '@agencycoda/mia-core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MiaFinder } from '../../entities/mia-finder';

@Component({
  selector: 'lib-mia-visor',
  templateUrl: './mia-visor.component.html',
  styleUrls: ['./mia-visor.component.scss']
})
export class MiaVisorComponent implements OnInit {

  isLoading = false;
  isPdf = false;

  constructor(
    protected dialogRef: MatDialogRef<MiaVisorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MiaFinder,
    protected sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onDownload() {
    window.open(this.data.url);
  }

  getUrlSanitizer() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
  }


  isImage(): boolean {
    return StringHelper.isImage(this.data.title);
  }

  isVideo(): boolean {
    return StringHelper.isVideo(this.data.title);
  }

  loadConfig() {
    if(StringHelper.getExtension(this.data.title) == 'pdf'){
      this.isPdf = true;
    }
  }
}
