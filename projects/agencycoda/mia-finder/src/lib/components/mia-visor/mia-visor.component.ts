import { StringHelper } from '@agencycoda/mia-core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MiaFinder } from '../../entities/mia-finder';
import { Viewer } from 'photo-sphere-viewer';

@Component({
  selector: 'lib-mia-visor',
  templateUrl: './mia-visor.component.html',
  styleUrls: ['./mia-visor.component.scss']
})
export class MiaVisorComponent implements OnInit {

  isLoading = false;
  isPdf = false;
  isTheta = false;

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

  onClickTheta360() {
    setTimeout(() => {
      this.loadTheta360();
    }, 2000);
    this.isTheta = true;
  }

  loadTheta360() {
    const viewer = new Viewer({
      container: document.querySelector('#viewer'),
      //panorama: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/valero-files/2_2021248_R0012274.JPG'
      //panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg'
      panorama: this.data.url
    });
  }

  isPossibleTheta() {
    let extension = StringHelper.getExtension(this.data.title);
    if((extension == 'jpg' || extension == 'jpeg') && this.data.size > 4000){
      return true;
    }

    return false;
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
