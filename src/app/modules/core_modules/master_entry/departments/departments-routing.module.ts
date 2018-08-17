import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentsComponent } from './add-departments/add-departments.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Departments'
    },
    children: [
      {
        path: 'add-departments/:id',
        component: AddDepartmentsComponent,
        data: {
          title: 'Update Department'
        }
      },
      {
        path: 'add-departments',
        component: AddDepartmentsComponent,
        data: {
          title: 'Add Department'
        }
      },
      {
        path: 'departments-list',
        component: DepartmentsListComponent,
        data: {
          title: 'Departments List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
