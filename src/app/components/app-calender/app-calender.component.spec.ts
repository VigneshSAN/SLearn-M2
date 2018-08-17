import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalenderComponent } from './app-calender.component';

describe('AppCalenderComponent', () => {
  let component: AppCalenderComponent;
  let fixture: ComponentFixture<AppCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
