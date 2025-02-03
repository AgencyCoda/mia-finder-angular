import { StringHelper } from '@agencycoda/mia-core-jv';
import { Component, ElementRef, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MiaFinder } from '../../entities/mia-finder';
import { Viewer } from 'photo-sphere-viewer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'lib-mia-visor',
	templateUrl: './mia-visor.component.html',
	styleUrls: ['./mia-visor.component.scss']
})

export class MiaVisorComponent implements OnInit {

	isLoading = false;
	// isPdf = false;
	// isTheta = false;

	selectedItem!:MiaFinder;
	selectedPosition = 0;
	items!:Array<MiaFinder>;
  	viewer! : Viewer;

	protected force360 = false;

	constructor(
		protected dialogRef: MatDialogRef<MiaVisorComponent>,
		@Inject(MAT_DIALOG_DATA) public data : {items: Array<MiaFinder>; selectedId?: number},
		protected sanitizer: DomSanitizer,
		private hostElement:ElementRef,
	) { }

	ngOnInit(): void {
		this.loadConfig();
	}

	loadConfig()
	{
		this.filterItems();
		this.selectItemAndPosition();
	}

	onDownload() {
		window.open(this.selectedItem.url);
	}

	onClickNextFile(event:MouseEvent) {
    		event.stopPropagation();
		this.selectedPosition++;
		this.switchFile
	}

	onClickPrevFile(event:MouseEvent) {
    		event.stopPropagation();
		this.selectedPosition--;
		this.switchFile();
	}
	switchFile() {
		this.selectedItem = this.items[ this.selectedPosition ];
    		this.destroyVisor();
    		if( this.isPossibleTheta() ) this.loadTheta360();

		if (this.isPDF()) {
			this.setIframe();
		}
	}

  destroyVisor()
  {
    if( this.viewer && this.viewer != null )
    {
      setTimeout(() => {
        this.viewer.destroy();
      }, 1000);
    }
  }

	protected toggle360() {
		this.force360 = !this.force360;

		if (this.force360)
			this.loadTheta360();
	}

	private loadTheta360() {
		setTimeout(() => {
			// if (this.viewer) {
      //   this.viewer.destroy();
      // }

			this.viewer = new Viewer({
				container: document.querySelector('#viewer') as HTMLElement,
				panorama: this.selectedItem.url
			});
		}, 2000);
	}

	protected isPossibleTheta() {
		let extension = StringHelper.getExtension(this.selectedItem.title);
		return (extension == 'jpg' || extension == 'jpeg') &&
			this.selectedItem.size > 4000 &&
			this.selectedItem.title.charAt(0) == 'R';
	}

	getUrlSanitizer() {
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedItem.url);
	}

	isImage(): boolean {
		return StringHelper.isImage(this.selectedItem.title);
	}

	isVideo(): boolean {
		return StringHelper.isVideo(this.selectedItem.title);
	}

	isPDF()
	{
		return StringHelper.getExtension(this.selectedItem.title) == 'pdf';
	}

	filterItems()
	{
		this.items = this.data.items.filter( item => StringHelper.isImage(item.title) || StringHelper.isVideo(item.title) || StringHelper.getExtension(item.title) == 'pdf' )
	}

	selectItemAndPosition()
	{
		if( this.data.selectedId )
		{
			this.selectedItem = this.items.find( item => item.id == this.data.selectedId )!;
			this.selectedPosition = this.items.indexOf( this.selectedItem );
		}else{
			this.selectedItem = this.items[0];
		}

		setTimeout(() => {
			if (this.isPDF()) {
				this.setIframe();
			}
		});
    	if( this.isPossibleTheta() ) this.loadTheta360();
	}

	setIframe() {
		setTimeout(() => {
			const iframe = this.hostElement.nativeElement.querySelector('iframe');
			iframe.src = this.selectedItem.url;	
		});
	}
}
