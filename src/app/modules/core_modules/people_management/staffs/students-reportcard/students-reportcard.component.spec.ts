import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsReportcardComponent } from './students-reportcard.component';

describe('StudentsReportcardComponent', () => {
  let component: StudentsReportcardComponent;
  let fixture: ComponentFixture<StudentsReportcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsReportcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsReportcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
