import { TestBed } from '@angular/core/testing';

import { MiaChangeNameModalService } from './mia-change-name-modal.service';

describe('MiaChangeNameModalService', () => {
  let service: MiaChangeNameModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaChangeNameModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
