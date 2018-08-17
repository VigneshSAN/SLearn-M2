import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCurricularComponent } from './co-curricular.component';

describe('CoCurricularComponent', () => {
  let component: CoCurricularComponent;
  let fixture: ComponentFixture<CoCurricularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCurricularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
