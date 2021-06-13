import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFinderTableComponent } from './mia-finder-table.component';

describe('MiaFinderTableComponent', () => {
  let component: MiaFinderTableComponent;
  let fixture: ComponentFixture<MiaFinderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFinderTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFinderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
