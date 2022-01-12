import { MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { MiaFinder } from '../../entities/mia-finder';
import { MiaFinderHttpService } from '../../services/mia-finder-http.service';
import { tap } from 'rxjs/operators';
import { MiaFinderModalService } from '../../services/mia-finder-modal.service';

@Component({
  selector: 'lib-media-library-modal',
  templateUrl: './media-library-modal.component.html',
  styleUrls: ['./media-library-modal.component.css']
})
export class MediaLibraryModalComponent implements OnInit {

  dataItems = new Array<MiaFinder>();
  isLoading = true;

  constructor(
    protected httpService: MiaFinderHttpService,
    protected finderModalService: MiaFinderModalService,
  ) { }

  ngOnInit(): void {
    this.loadItems();
  }

  onClickNewFolder() {
    this.finderModalService.newFolder(new MiaFinder());
  }

  loadItems() {
    this.isLoading = true;
    this.httpService
    .listOb(new MiaQuery())
    .pipe(tap(res => this.dataItems = res.data))
    .subscribe(res => this.isLoading = false);
  }
}
