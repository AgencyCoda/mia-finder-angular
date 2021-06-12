import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiaFinder } from '../entities/mia-finder';
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
    protected changeModal: MiaChangeNameModalService
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
}
