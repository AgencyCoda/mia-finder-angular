import { TestBed } from '@angular/core/testing';

import { MiaFinderModalService } from './mia-finder-modal.service';

describe('MiaFinderModalService', () => {
  let service: MiaFinderModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaFinderModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
