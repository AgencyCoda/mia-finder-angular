import { TestBed } from '@angular/core/testing';

import { MiaFolderModalService } from './mia-folder-modal.service';

describe('MiaFolderModalService', () => {
  let service: MiaFolderModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaFolderModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
