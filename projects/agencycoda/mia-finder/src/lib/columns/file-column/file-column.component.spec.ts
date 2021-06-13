import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileColumnComponent } from './file-column.component';

describe('FileColumnComponent', () => {
  let component: FileColumnComponent;
  let fixture: ComponentFixture<FileColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
