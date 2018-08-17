import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { AddEventsComponent } from './add-events/add-events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsService } from './events.service';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ConstantService } from '../../../../constant.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DepartmentsService } from '../departments/departments.service';
import { NgDatepickerModule } from 'ng2-datepicker';

import { BatchService } from '../batch/batch.service';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    FormsModule,
    NgDatepickerModule,
 //   DpDatePickerModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [AddEventsComponent, EventsListComponent],
  providers: [
    EventsService,
    ConstantService,
    DepartmentsService,
    BatchService
  ]
})
export class EventsModule {

 }
