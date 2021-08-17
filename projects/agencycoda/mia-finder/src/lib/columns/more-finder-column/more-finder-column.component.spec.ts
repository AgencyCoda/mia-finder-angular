import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFinderColumnComponent } from './more-finder-column.component';

describe('MoreFinderColumnComponent', () => {
  let component: MoreFinderColumnComponent;
  let fixture: ComponentFixture<MoreFinderColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreFinderColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFinderColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
