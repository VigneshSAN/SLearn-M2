import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchRoutingModule } from './batch-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { BatchService } from './batch.service';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StaffsService } from '../../people_management/staffs/staffs.service';
import { TermService } from '../term/term.service';
import { ToastModule } from 'ng2-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpStatusService } from '../../../../http-status.service';

@NgModule({
  imports: [
    CommonModule,
    BatchRoutingModule,
    SharedModule,
    FormsModule,
    ToastModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [BatchListComponent, AddBatchComponent],
  providers: [
    BatchService,
    StaffsService,
    TermService,
    HttpStatusService
  ]
})
export class BatchModule { }
