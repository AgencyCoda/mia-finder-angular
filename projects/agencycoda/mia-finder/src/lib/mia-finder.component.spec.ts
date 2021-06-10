import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaFinderComponent } from './mia-finder.component';

describe('MiaFinderComponent', () => {
  let component: MiaFinderComponent;
  let fixture: ComponentFixture<MiaFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
