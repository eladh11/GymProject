import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllGymsComponent } from './get-all-gyms.component';

describe('GetAllGymsComponent', () => {
  let component: GetAllGymsComponent;
  let fixture: ComponentFixture<GetAllGymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllGymsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
