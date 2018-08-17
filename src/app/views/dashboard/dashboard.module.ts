import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

/** FOR CAROUSEL **/
import { CarouselModule } from 'ngx-bootstrap/carousel';

// FUSION CHARTS
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

/**  FOR HIGH CHARTS **/
// import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ more, exporting ];
}

import {NgxPaginationModule} from 'ngx-pagination';

import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';

// import { DemoUtilsModule } from './demo-utils/module';
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  imports: [
    ButtonsModule.forRoot(),
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CalendarModule,
    FusionChartsModule,
    CarouselModule,
    ChartModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    CalendarModule.forRoot(),
    FullCalendarModule,
  ],
  declarations: [ DashboardComponent],
  exports: [DashboardComponent],
  // HIGH CHARTS
  providers: [
  //  { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ]
})
export class DashboardModule {
}

