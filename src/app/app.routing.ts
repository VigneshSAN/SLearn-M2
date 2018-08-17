import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'students',
        loadChildren: './modules/core_modules/people_management/students/students.module#StudentsModule'
      },
      {
        path: 'staffs',
        loadChildren: './modules/core_modules/people_management/staffs/staffs.module#StaffsModule'
      },
      {
        path: 'parents',
        loadChildren: './modules/core_modules/people_management/parents/parents.module#ParentsModule'
      },
      {
        path: 'departments',
        loadChildren: './modules/core_modules/master_entry/departments/departments.module#DepartmentsModule'
      },
      {
        path: 'batch',
        loadChildren: './modules/core_modules/master_entry/batch/batch.module#BatchModule'
      },
      {
        path: 'term',
        loadChildren: './modules/core_modules/master_entry/term/term.module#TermModule'
      },
      {
        path: 'events',
        loadChildren: './modules/core_modules/master_entry/events/events.module#EventsModule'
      },
      {
        path: 'course',
        loadChildren: './modules/core_modules/master_entry/course/course.module#CourseModule'
      },
      {
        path: 'time-table',
        loadChildren: './modules/core_modules/manage_classes/time-table/time-table.module#TimeTableModule'
      },
      {
        path: 'login',
        loadChildren: './modules/core_modules/people_management/login/login.module#LoginModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
