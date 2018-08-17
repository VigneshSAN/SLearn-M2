import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { AddStaffsComponent } from './add-staffs/add-staffs.component';
import { StaffsListComponent } from './staffs-list/staffs-list.component';
// import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { BsDropdownModule, CarouselModule, TabsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CalendarModule } from 'angular-calendar';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullCalendarModule } from 'ng-fullcalendar';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ChartModule } from 'angular-highcharts';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppDataTableComponent } from '../../../../components';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StaffsService } from './staffs.service';
import { Http, HttpModule } from '@angular/http';
import { ConstantService } from '../../../../constant.service';
import { SharedModule } from '../../../../shared/shared.module';
import { Ng2PopupModule } from 'ng2-popup';
import { CourseCompletionsComponent } from './course-completions/course-completions.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsReportcardComponent } from './students-reportcard/students-reportcard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BarRatingModule } from 'ngx-bar-rating';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StaffPerformanceComponent } from './staff-performance/staff-performance.component';
import { SidebarModule } from 'ng-sidebar';




import { ToastOptions, ToastModule } from 'ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { DateService } from '../../../../date.service';
import { DepartmentsService } from '../../master_entry/departments/departments.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StaffsRoutingModule,
    FusionChartsModule,
    TabsModule.forRoot(),
    ChartModule,
    HttpModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    SharedModule,
    Ng2PopupModule,
    NgCircleProgressModule,
    BarRatingModule,
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    SidebarModule.forRoot()
  ],
  declarations: [AddStaffsComponent, StaffsListComponent, StaffDashboardComponent, CourseCompletionsComponent, StudentsDetailsComponent, StudentsReportcardComponent, StaffPerformanceComponent, StudentsAttendanceComponent, LeaveRequestComponent],
  providers: [
    StaffsService,
    ConstantService,
    DateService,
    DepartmentsService
  ]
})
export class StaffsModule { }
