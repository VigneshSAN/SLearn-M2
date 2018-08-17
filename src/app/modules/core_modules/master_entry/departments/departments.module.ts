import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { AddDepartmentsComponent } from './add-departments/add-departments.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DepartmentsService } from './departments.service';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [DepartmentsListComponent, AddDepartmentsComponent],
  providers: [
    DepartmentsService
  ]
})
export class DepartmentsModule { }
