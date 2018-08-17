import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DateService } from './date.service';

/** FOR JQUERY  **/
declare var jquery: any;
declare var $: any;

import { DatepickerOptions } from 'ng2-datepicker';
import { frLocale } from 'ngx-bootstrap';

import { DragulaModule, DragulaService } from 'ng2-dragula';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit {

  constructor(private router: Router, private dateService: DateService, private dragulaService: DragulaService) {
  }

    public myModal;
    public largeModal;
    public smallModal;
    public primaryModal;
    public successModal;
    public warningModal;
    public dangerModal;
    public infoModal;


  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.date = new Date();
  }

    // Date Picker

    date: Date;
    options: DatepickerOptions = {
     minYear: 1970,
     maxYear: 2030,
     displayFormat: 'DD/MM/YYYY',
    // barTitleFormat: 'MMMM YYYY',
   //   dayNamesFormat: 'dd',
   //   firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
     locale: frLocale,
   //   minDate: new Date(Date.now()), // Minimal selectable date
   //   maxDate: new Date(Date.now()),  // Maximal selectable date
   //   barTitleIfEmpty: 'Click to select a date',
       placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
   //   addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
   //   addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
      fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
   // // useEmptyBarTitle: false,
   };
}
