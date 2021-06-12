import { TestBed } from '@angular/core/testing';

import { MiaNewLinkModalService } from './mia-new-link-modal.service';

describe('MiaNewLinkModalService', () => {
  let service: MiaNewLinkModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaNewLinkModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
