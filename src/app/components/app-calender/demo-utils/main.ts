import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'APP',
    styles: [`
      chart {
        display: block;
      }
    `],
    template: `<chart [options]="options"></chart>`
})
class AppComponent {
    // tslint:disable-next-line:no-trailing-whitespace
    constructor() { 
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129],
            }]
        };
    }
    // tslint:disable-next-line:member-ordering
    options: Object;
}

@NgModule({
 // imports:      [BrowserModule, ChartModule.forRoot(require('highcharts'))],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
