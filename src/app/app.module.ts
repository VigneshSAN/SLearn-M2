import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
// FOR CAROUSEL
import { Component } from '@angular/core';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV,
  AppDataTableComponent,
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV,
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

/*** FUSION CHARTS ***/
// FUSION CHARTS
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

// HIGHCHARTS
// import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { ChartModule } from 'angular2-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src.js';

// FOR TABS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'web-animations-js/web-animations.min';
import { NguiTabModule } from '@ngui/tab';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

// FOR PAGINATIONS
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule, PaginationModule, TooltipModule } from 'ngx-bootstrap';
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';
import { StudentsModule } from './modules/core_modules/people_management/students/students.module';
import { StaffsModule } from './modules/core_modules/people_management/staffs/staffs.module';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { DepartmentsModule } from './modules/core_modules/master_entry/departments/departments.module';
import { AppCalenderComponent } from './components/app-calender/app-calender.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './components/app-calender/demo-utils/module';
import { SharedModule } from './shared/shared.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpStatusService } from './http-status.service';

import { CommonModule } from '@angular/common';
import { DateService } from './date.service';
import { SidebarModule } from 'ng-sidebar';

import { NgDatepickerModule } from 'ng2-datepicker';

/*** HARI MODULES ***/
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './modules/core_modules/people_management/login/login/login.component';
import { LoginRoutingModule } from './modules/core_modules/people_management/login/login-routing.module';
import { LoginModule } from './modules/core_modules/people_management/login/login.module';
import { DragulaModule } from 'ng2-dragula';
import { CookieService } from '../../node_modules/angular2-cookie/services/cookies.service';
import { MyHttpClientInterceptor } from './my-http-client-Interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import {providerCustomHttp} from './my-http-provider';
import { ConstantService } from './constant.service';



declare function require(name: any);

export function highchartModules() {
  return [exporting];
}

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    ChartModule,
    FusionChartsModule,
    BrowserAnimationsModule,
    NguiTabModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    PaginationModule.forRoot(),
    StudentsModule,
    StaffsModule,
    ToastModule,
    DepartmentsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule,
    SharedModule,
    Ng4LoadingSpinnerModule.forRoot(),
  //  NG2DataTableModule,
    SidebarModule.forRoot(),
    NgxSpinnerModule,
    LoginModule,
    DragulaModule.forRoot(),
    NgDatepickerModule 
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    DashboardComponent,
  ],
  providers: [ConstantService , {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }, HttpStatusService, DateService, CookieService ,
  { 
    provide: HTTP_INTERCEPTORS, 
    useClass: MyHttpClientInterceptor, 
    multi: true 
},
{ 
  provide: Http, 
  useFactory: providerCustomHttp , 
  deps: [XHRBackend, RequestOptions , CookieService]
}  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
