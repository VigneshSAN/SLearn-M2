import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermRoutingModule } from './term-routing.module';
import { TermListComponent } from './term-list/term-list.component';
import { AddTermComponent } from './add-term/add-term.component';
import { TermService } from './term.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { ConstantService } from '../../../../constant.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpStatusService } from '../../../../http-status.service';

@NgModule({
  imports: [
    CommonModule,
    TermRoutingModule,
    SharedModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [TermListComponent, AddTermComponent],
  providers: [
    TermService,
    ConstantService,
    HttpStatusService
  ]
})
export class TermModule { }
