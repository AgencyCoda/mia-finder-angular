import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaBreadcrumbComponent } from './mia-breadcrumb.component';

describe('MiaBreadcrumbComponent', () => {
  let component: MiaBreadcrumbComponent;
  let fixture: ComponentFixture<MiaBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
