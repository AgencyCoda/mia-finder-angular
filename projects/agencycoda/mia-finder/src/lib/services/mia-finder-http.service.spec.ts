import { TestBed } from '@angular/core/testing';

import { MiaFinderHttpService } from './mia-finder-http.service';

describe('MiaFinderHttpService', () => {
  let service: MiaFinderHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaFinderHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
