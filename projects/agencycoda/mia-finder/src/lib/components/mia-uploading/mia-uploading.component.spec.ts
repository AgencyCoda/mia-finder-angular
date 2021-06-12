import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaUploadingComponent } from './mia-uploading.component';

describe('MiaUploadingComponent', () => {
  let component: MiaUploadingComponent;
  let fixture: ComponentFixture<MiaUploadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaUploadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaUploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
