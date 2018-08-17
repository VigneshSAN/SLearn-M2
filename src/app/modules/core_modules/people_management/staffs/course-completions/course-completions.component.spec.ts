import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompletionsComponent } from './course-completions.component';

describe('CourseCompletionsComponent', () => {
  let component: CourseCompletionsComponent;
  let fixture: ComponentFixture<CourseCompletionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCompletionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCompletionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
