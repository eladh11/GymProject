import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiseAdminComponent } from './adise-admin.component';

describe('AdiseAdminComponent', () => {
  let component: AdiseAdminComponent;
  let fixture: ComponentFixture<AdiseAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiseAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
