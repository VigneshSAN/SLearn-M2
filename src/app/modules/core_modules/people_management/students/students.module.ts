import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { TabsModule, ButtonsModule, BsDropdownModule, CarouselModule } from 'ngx-bootstrap';
import { ChartModule } from 'angular-highcharts';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CalendarModule } from 'angular-calendar';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AcademicComponent } from './academic/academic.component';
import { StudentsService } from './students.service';
import { SharedModule } from '../../../../shared/shared.module';
import { CoCurricularComponent } from './co-curricular/co-curricular.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BarRatingModule } from 'ngx-bar-rating';
import { StudentTaskComponent } from './student-task/student-task.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { NgProgressModule } from 'ngx-progressbar';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { DateService } from '../../../../date.service';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { BatchService } from '../../master_entry/batch/batch.service';
import { NgDatepickerModule } from 'ng2-datepicker';


@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    CalendarModule,
    FusionChartsModule,
    CarouselModule,
    ChartModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    CalendarModule.forRoot(),
    FullCalendarModule,
    StudentsRoutingModule,
    NgCircleProgressModule.forRoot(),
    BarRatingModule,
    ProgressbarModule.forRoot(),
    OwlModule,
    NgProgressModule,
    SharedModule,
    NgDatepickerModule
  ],
  declarations: [StudentDashboardComponent, AddStudentsComponent, StudentsListComponent, StudentDetailsComponent, AcademicComponent, CoCurricularComponent, StudentTaskComponent, StudentAttendanceComponent, LeaveRequestComponent, ViewStudentsComponent],
  providers: [
    StudentsService,
    DateService,
    BatchService
  ]
})

export class StudentsModule { }
