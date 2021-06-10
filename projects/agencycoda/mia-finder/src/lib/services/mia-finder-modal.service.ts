import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiaFinder } from '../entities/mia-finder';
import { MiaFolderModalService } from './mia-folder-modal.service';

@Injectable({
  providedIn: 'root'
})
export class MiaFinderModalService {

  constructor(
    protected folderModal: MiaFolderModalService
  ) { }

  newFolder(item: MiaFinder): Observable<boolean> {
    return this.folderModal.openModal(item);
  }
}
