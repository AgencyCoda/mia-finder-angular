import { TestBed } from '@angular/core/testing';

import { MiaFinderService } from './mia-finder.service';

describe('MiaFinderService', () => {
  let service: MiaFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
