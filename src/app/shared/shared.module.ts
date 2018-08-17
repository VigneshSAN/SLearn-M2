import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataTableComponent, AppCalenderComponent } from '../components';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaginationModule, BsDropdownModule } from 'ngx-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from '../components/app-calender/demo-utils/module';
import { ToastModule } from 'ng2-toastr';


@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    PaginationModule.forRoot(),
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule,
    ToastModule.forRoot(),
  ],
  declarations: [
    AppDataTableComponent,
    AppCalenderComponent
  ],
  exports: [
    AppDataTableComponent,
    AppCalenderComponent
  ]
})
export class SharedModule { }
