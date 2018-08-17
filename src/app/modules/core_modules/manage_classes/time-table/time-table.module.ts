import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTableRoutingModule } from './time-table-routing.module';
import { ManualComponent } from './manual/manual.component';
import { AutomaticComponent } from './automatic/automatic.component';
import { ArchwizardModule } from 'angular-archwizard';
import { BatchService } from '../../master_entry/batch/batch.service';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ConstantService } from '../../../../constant.service';
import { TimeTableService } from './time-table.service';
import { DragulaModule } from 'ng2-dragula';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    ArchwizardModule,
    FormsModule,
    SharedModule,
    DragulaModule.forRoot()
  ],
  declarations: [ManualComponent, AutomaticComponent, ViewComponent],
  providers:[
    BatchService,
    ConstantService,
    TimeTableService
  ]
})
export class TimeTableModule { }
