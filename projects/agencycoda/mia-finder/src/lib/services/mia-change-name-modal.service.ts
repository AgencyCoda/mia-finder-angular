import { MiaFormConfig, MiaFormModalComponent, MiaFormModalConfig } from '@agencycoda/mia-form';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MiaFinder } from '../entities/mia-finder';
import { MiaFinderHttpService } from './mia-finder-http.service';

@Injectable({
  providedIn: 'root'
})
export class MiaChangeNameModalService {

  constructor(
    protected dialog: MatDialog,
    protected httpService: MiaFinderHttpService
  ) { }

  openModal(item: MiaFinder): Observable<any> {
    let data = new MiaFormModalConfig();
    data.item = item;
    data.service = this.httpService;
    
    data.titleNew = 'Change Name';
    data.titleEdit = 'Change Name';

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
      { key: 'title', type: 'string', label: 'Name', },
    ];

    data.config = config;

    return this.dialog.open(MiaFormModalComponent, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: data
    }).afterClosed();
  }
}
