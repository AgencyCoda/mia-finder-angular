import { MiaQuery } from '@agencycoda/mia-core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MiaFinder } from '../../entities/mia-finder';
import { MiaFinderHttpService } from '../../services/mia-finder-http.service';
import { MiaFinderService } from '../../services/mia-finder.service';

@Component({
  selector: 'lib-mia-move-file-modal',
  templateUrl: './mia-move-file-modal.component.html',
  styleUrls: ['./mia-move-file-modal.component.scss']
})
export class MiaMoveFileModalComponent implements OnInit {

  isLoading = true;

  current!: MiaFinder;
  folders = new Array<MiaFinder>();

  constructor(
    protected dialogRef: MatDialogRef<MiaMoveFileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { topId?: number, file: MiaFinder, folder: MiaFinder },
    protected httpService: MiaFinderHttpService
  ) { }

  ngOnInit(): void {
    this.current = this.data.folder;
    this.loadFolders();
  }

  onClickMove() {
    this.isLoading = true;
    this.httpService.move(this.data.file.id, this.current.id).then(res => this.dialogRef.close(true));
  }

  loadFolders() {
    this.isLoading = true;
    let query = new MiaQuery();
    query.addWhere('parent_id', this.current.id);
    query.addWhere('type', MiaFinder.TYPE_FOLDER);
    this.httpService.list(query).then(result => this.folders = result.data).then(res => this.isLoading = false);
  }

  onClickFolder(folder: MiaFinder) {
    this.current = folder;
    this.loadFolders();
  }

  onClickUpFolder() {
    this.isLoading = true;
    this.httpService
    .fetch(this.current.parent_id!)
    .then(res => this.current = res)
    .then(res => this.loadFolders());
  }

  isTop(): boolean {
    if(this.data.topId != undefined && this.data.topId == this.current.id){
      return true;
    }

    if(this.current.parent_id == undefined || this.current.parent_id == 0){
      return true;
    }

    return false;
  }
}
