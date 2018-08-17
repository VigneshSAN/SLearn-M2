import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsDashboardComponent } from './parents-dashboard/parents-dashboard.component';
import { AddParentsComponent } from './add-parents/add-parents.component';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';

const routes: Routes = [
  {
    path : '',
    data : {
      title : 'Parents'
    },
    children : [
      {
        path : 'dashboard',
        component : ParentsDashboardComponent,
        data : {
          title : 'Dashboard'
        }
      },
      {
        path : 'add-parents',
        component : AddParentsComponent,
        data : {
          title : 'Add Parents'
        }
      },
      {
        path : 'parents-list',
        component : ParentsListComponent,
        data : {
          title : 'Parents List'
        }
      },
      {
        path : 'parent-details',
        component : ParentDetailsComponent,
        data : {
          title : 'Parent Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
