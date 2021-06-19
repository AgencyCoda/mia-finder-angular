import { MiaAuthConfig, MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { MiaBaseCrudHttpService, MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiaFinder } from '../entities/mia-finder';
import { MiaFinderTag } from '../entities/mia-finder-tag';

@Injectable({
  providedIn: 'root'
})
export class MiaFinderHttpService extends MiaBaseCrudHttpService<MiaFinder> {

  constructor(
    @Inject(MIA_AUTH_PROVIDER) protected config: MiaAuthConfig,
    protected http: HttpClient,
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-finder';
  }
  
  fetch(itemId: number): Promise<MiaFinder> {
    return this.get(this.config.baseUrl + 'mia-finder/fetch/' + itemId);
  }

  fetchOb(itemId: number): Observable<MiaFinder> {
    return this.getOb(this.config.baseUrl + 'mia-finder/fetch/' + itemId);
  }

  save(item: MiaFinder): Promise<MiaFinder> {
    return this.post(this.config.baseUrl + 'mia-finder/upload-item', item);
  }

  saveOb(item: MiaFinder): Observable<MiaFinder> {
    return this.postOb(this.config.baseUrl + '/mia-finder/upload-item', item);
  }

  list(query: MiaQuery): Promise<MiaPagination<MiaFinder>> {
    return this.post(this.config.baseUrl + '/mia-finder/list-items', query.toParams());
  }

  listOb(query: MiaQuery): Observable<MiaPagination<MiaFinder>> {
    return this.postOb(this.config.baseUrl + '/mia-finder/list-items', query.toParams());
  }

  listWithExtras(query: MiaQuery, moreParams: any): Promise<MiaPagination<MiaFinder>> {
    let data = {...query.toParams(), ...moreParams};
    return this.post(this.config.baseUrl + '/mia-finder/list-items', data);
  }

  tags(query: MiaQuery): Promise<MiaPagination<MiaFinderTag>> {
    return this.post(this.config.baseUrl + '/mia-finder/tags', query.toParams());
  }

  tagsOb(query: MiaQuery): Observable<MiaPagination<MiaFinderTag>> {
    return this.postOb(this.config.baseUrl + '/mia-finder/tags', query.toParams());
  }
}
