import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Course'
    },
    children: [
      {
        path: 'add-course/:id',
        component: AddCourseComponent,
        data: {
          title: 'Update Course'
        }
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
        data: {
          title: 'Add Course'
        }
      },
      {
        path: 'course-list',
        component: CourseListComponent,
        data: {
          title: 'Course List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
