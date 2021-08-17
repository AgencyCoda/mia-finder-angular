import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaVisorComponent } from './mia-visor.component';

describe('MiaVisorComponent', () => {
  let component: MiaVisorComponent;
  let fixture: ComponentFixture<MiaVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaVisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
