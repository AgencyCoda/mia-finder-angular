import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiaFinder } from '../entities/mia-finder';
import { MiaFolderModalService } from './mia-folder-modal.service';
import { MiaNewLinkModalService } from './mia-new-link-modal.service';

@Injectable({
  providedIn: 'root'
})
export class MiaFinderModalService {

  constructor(
    protected folderModal: MiaFolderModalService,
    protected linkModal: MiaNewLinkModalService
  ) { }

  newFolder(item: MiaFinder): Observable<boolean> {
    return this.folderModal.openModal(item);
  }

  newFileLink(item: MiaFinder): Observable<boolean> {
    return this.linkModal.openModal(item);
  }
}
