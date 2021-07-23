import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
      data: { topId: topId, file: item, folder: folder }
    }).afterClosed();
  }
}
