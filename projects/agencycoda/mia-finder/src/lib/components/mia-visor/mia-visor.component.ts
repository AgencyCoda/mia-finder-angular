import { StringHelper } from '@agencycoda/mia-core';
import { Component, Inject, OnInit, Output } from '@angular/core';
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
	// isPdf = false;
	// isTheta = false;

	selectedItem!:MiaFinder;
	selectedPosition = 0;
	items!:Array<MiaFinder>;

	constructor(
		protected dialogRef: MatDialogRef<MiaVisorComponent>,
		@Inject(MAT_DIALOG_DATA) public data : {items: Array<MiaFinder>; selectedId?: number},
		protected sanitizer: DomSanitizer
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

	onClickNextFile()
	{
		console.log( 'NEXT FILE' );
		this.selectedPosition++;
		this.selectedItem = this.items[ this.selectedPosition ];
	}

	onClickPrevFile()
	{
		console.log( 'PREV FILE' );
		this.selectedPosition--;
		this.selectedItem = this.items[ this.selectedPosition ];
	}

	onClickTheta360() {
		setTimeout(() => {
			this.loadTheta360();
		}, 2000);
		// this.isTheta = true;
	}

	loadTheta360() {
		const viewer = new Viewer({
			container: document.querySelector('#viewer'),
			//panorama: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/valero-files/2_2021248_R0012274.JPG'
			//panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg'
			panorama: this.selectedItem.url
		});
	}

	isPossibleTheta() {
		let extension = StringHelper.getExtension(this.selectedItem.title);
		return (extension == 'jpg' || extension == 'jpeg') && this.selectedItem.size > 4000 && this.selectedItem.title.charAt(0) == 'R';
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
	}

}
