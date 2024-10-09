import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
// import { EventEmitter } from 'stream';
import { MiaVisorComponent } from '../components/mia-visor/mia-visor.component';
import { MiaFinder } from '../entities/mia-finder';
import { MiaMoveFileModalComponent } from '../modals/mia-move-file-modal/mia-move-file-modal.component';
import { MiaChangeNameModalService } from './mia-change-name-modal.service';
import { MiaFolderModalService } from './mia-folder-modal.service';
import { MiaNewLinkModalService } from './mia-new-link-modal.service';

@Injectable({
  providedIn: 'root'
})
export class MiaFinderModalService {

  constructor(
    protected folderModal: MiaFolderModalService,
    protected linkModal: MiaNewLinkModalService,
    protected changeModal: MiaChangeNameModalService,
    protected dialog: MatDialog
  ) { }

  newFolder(item: MiaFinder): Observable<boolean> {
    return this.folderModal.openModal(item);
  }

  newFileLink(item: MiaFinder): Observable<boolean> {
    return this.linkModal.openModal(item);
  }

  changeName(item: MiaFinder): Observable<boolean> {
    return this.changeModal.openModal(item);
  }

  moveFile(item: MiaFinder, folder: MiaFinder, topId?: number): Observable<boolean> {
    return this.dialog.open(MiaMoveFileModalComponent, {
      width: '300px',
      data: { topId: topId, file: item, folder: folder }
    }).afterClosed();
  }

  openVisor(items: Array<MiaFinder>, selectedId?:number): Observable<boolean> {
    return this.dialog.open(MiaVisorComponent, {
      data: {items: items, selectedId: selectedId}
    }).afterClosed();
  }

  // openVisorMulti(item: MiaFinder): Observable<any> {
  //   let dialogRef = this.dialog.open(MiaVisorComponent, {
  //     data: item
  //   });

  //   return dialogRef.componentInstance.clickItem;
  // }
}
