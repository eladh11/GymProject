import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymDetailsComponent } from './gym-details.component';

describe('GymDetailsComponent', () => {
  let component: GymDetailsComponent;
  let fixture: ComponentFixture<GymDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
