import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeColumnComponent } from './size-column.component';

describe('SizeColumnComponent', () => {
  let component: SizeColumnComponent;
  let fixture: ComponentFixture<SizeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
