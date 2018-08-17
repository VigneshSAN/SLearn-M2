import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AcademicComponent } from './academic/academic.component';
import { CoCurricularComponent } from './co-curricular/co-curricular.component';
import { StudentTaskComponent } from './student-task/student-task.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

const routes: Routes = [
  {
    path : '',
    data : {
      title : 'Students'
    },
    children : [
      {
        path : 'dashboard',
        component : StudentDashboardComponent,
        data : {
          title : 'Dashboard'
        }
      },
      {
        path : 'academic',
        component : AcademicComponent,
        data : {
          title : 'Academic'
        }
      },
      {
        path : 'add-students',
        component : AddStudentsComponent,
        data : {
          title : 'Add Students'
        }
      },
      {
        path : 'add-students/:id',
        component : AddStudentsComponent,
        data : {
          title : 'Add Students'
        }
      },
      {
        path : 'students-list',
        component : StudentsListComponent,
        data : {
          title : 'Students List'
        }
      },
      {
        path : 'student-details',
        component : StudentDetailsComponent,
        data : {
          title : 'Student Details'
        }
      },
      {
        path : 'co-curricular',
        component : CoCurricularComponent,
        data : {
          title : 'Co-Curricular'
        }
      },
      {
        path : 'student-task',
        component : StudentTaskComponent,
        data : {
          title : 'Student Task'
        }
      },
      {
        path : 'student-attendance',
        component : StudentAttendanceComponent,
        data : {
          title : 'Student Attendance'
        }
      },
      {
        path : 'leave-request',
        component : LeaveRequestComponent,
        data : {
          title : 'Leave Request'
        }
      },
      {
        path : 'view-students/:id',
        component : ViewStudentsComponent,
        data : {
          title : 'View Students'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentsRoutingModule { }
