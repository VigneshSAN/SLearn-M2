import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsDashboardComponent } from './parents-dashboard/parents-dashboard.component';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';
import { AddParentsComponent } from './add-parents/add-parents.component';

@NgModule({
  imports: [
    CommonModule,
    ParentsRoutingModule
  ],
  declarations: [ParentsDashboardComponent, ParentsListComponent, ParentDetailsComponent, AddParentsComponent]
})
export class ParentsModule { }
