import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaMoveFileModalComponent } from './mia-move-file-modal.component';

describe('MiaMoveFileModalComponent', () => {
  let component: MiaMoveFileModalComponent;
  let fixture: ComponentFixture<MiaMoveFileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaMoveFileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaMoveFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
