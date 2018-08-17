import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { AddStudentsComponent } from '../students/add-students/add-students.component';
import { StudentsListComponent } from '../students/students-list/students-list.component';
import { StaffsListComponent } from './staffs-list/staffs-list.component';
// import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { AddStaffsComponent } from './add-staffs/add-staffs.component';
import { CourseCompletionsComponent } from './course-completions/course-completions.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsReportcardComponent } from './students-reportcard/students-reportcard.component';
import { StaffPerformanceComponent } from './staff-performance/staff-performance.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

const routes: Routes = [
  {
    path : '',
    data : {
      title : 'Staffs'
    },
    children : [
      {
        path : 'dashboard',
        component : StaffDashboardComponent,
        data : {
          title : 'Dashboard'
        }
      },
      {
        path : 'add-staffs/:id',
        component : AddStaffsComponent,
        data : {
          title : 'Add Staffs'
        }
      },
      {
        path : 'add-staffs',
        component : AddStaffsComponent,
        data : {
          title : 'Add Staffs'
        }
      },
      {
        path : 'staffs-list',
        component : StaffsListComponent,
        data : {
          title : 'Staffs List'
        }
      },
      // {
      //   path : 'staff-details/:id',
      //   component : StaffDetailsComponent,
      //   data : {
      //     title : 'Staff Details'
      //   }
      // },
      {
        path : 'course-completions',
        component : CourseCompletionsComponent,
        data : {
          title : 'Course Completions'
        }
      },
      {
        path : 'students-details',
        component : StudentsDetailsComponent,
        data : {
          title : 'Students Details'
        }
      },
      {
        path : 'students-reportcard',
        component : StudentsReportcardComponent,
        data : {
          title : 'Students Report Card'
        }
      },
      {
        path : 'staff-performance',
        component : StaffPerformanceComponent,
        data : {
          title : 'Staff Performance'
        }
      },
      {
        path : 'students-attendance',
        component : StudentsAttendanceComponent,
        data : {
          title : 'Students Attendance'
        }
      },
      {
        path : 'leave-request',
        component : LeaveRequestComponent,
        data : {
          title : 'Leave Request'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }
