// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

// FUSION CHARTS
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

import { TabsModule } from 'ngx-bootstrap';

// HIGHCHARTS
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [ more, exporting ];
}
import {NgxPaginationModule} from 'ngx-pagination';

import { DragulaModule } from 'ng2-dragula';
import {DndModule} from 'ng2-dnd';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragScrollModule } from 'ngx-drag-scroll';



@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FusionChartsModule,
    TabsModule.forRoot(),
    ChartModule,
    DragulaModule,
    DndModule.forRoot(),
    NgxPaginationModule,
    NgDragDropModule.forRoot(),
    DragScrollModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent
  ]
})
export class ThemeModule { }
