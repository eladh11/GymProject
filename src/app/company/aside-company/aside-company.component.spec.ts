import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCompanyComponent } from './aside-company.component';

describe('AsideCompanyComponent', () => {
  let component: AsideCompanyComponent;
  let fixture: ComponentFixture<AsideCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
