import { MiaFormConfig, MiaFormModalComponent, MiaFormModalConfig } from '@agencycoda/mia-form';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MiaFinder } from '../entities/mia-finder';
import { MiaFinderHttpService } from './mia-finder-http.service';

@Injectable({
  providedIn: 'root'
})
export class MiaNewLinkModalService {

  constructor(
    protected dialog: MatDialog,
    protected httpService: MiaFinderHttpService
  ) { }

  openModal(item: MiaFinder): Observable<any> {
    item.type = MiaFinder.TYPE_FOLDER;

    let data = new MiaFormModalConfig();
    data.item = item;
    data.service = this.httpService;
    
    data.titleNew = 'New File link';
    data.titleEdit = 'Edit File';

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
      { key: 'title', type: 'string', label: 'Title', },
      { key: 'url', type: 'string', label: 'URL', },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];

    data.config = config;

    return this.dialog.open(MiaFormModalComponent, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: data
    }).afterClosed();
  }
}
