import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { EventsService } from '../events.service';
import { ConstantService } from '../../../../../constant.service';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DateService } from '../../../../../date.service';
import { DepartmentsService } from '../../departments/departments.service';
import { DatepickerOptions } from 'ng2-datepicker';
import { frLocale } from 'ngx-bootstrap';


import { BatchService } from '../../batch/batch.service';
// import { DatepickerOptions } from '../../../../../../../node_modules/ng2-datepicker/dist/public_api';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss'],
})
export class AddEventsComponent implements OnInit {

   // Date Picker

   date: Date;
   options: DatepickerOptions = {
    minYear: 2018,
    maxYear: 2030,
    displayFormat: 'DD-MM-YYYY',
   // barTitleFormat: 'MMMM YYYY',
  //   dayNamesFormat: 'dd',
  //   firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale,
  //  minDate: new Date(Date.now()), // Minimal selectable date
  //  maxDate: new Date(Date.now()),  // Maximal selectable date
  //   barTitleIfEmpty: 'Click to select a date',
      placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
  //   addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
     addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
     fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
  // // useEmptyBarTitle: false,
  };

  events: any = {
    name: '',
    description: '',
    type: '-1',
    category: '-1',
    entityLevel: 'Institute',
    entityId: '-1',
    beginTimestamp: '',
    endTimestamp: ''
  }

  eventType: any = [];
  eventLevel: any = [];
  eventCategory: any = [];
  EntityID: any = [];

  entityId: string;

  constructor(public batchService: BatchService, public departmentsService: DepartmentsService , private dateService: DateService, private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastsManager, vcr: ViewContainerRef, private constantService: ConstantService, private eventsService: EventsService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.date = new Date();
  }

  ngOnInit() {
    this.spinnerService.show();
    this.getEventCategory();
    this.getEventLevel();
    this.getEventType();
    this.spinnerService.hide();

  }

  submitEvents(events) {
    this.spinnerService.show();

    this.events.beginTimestamp += 'T00:00:00.000Z';
    this.events.endTimestamp += 'T23:59:59.000Z';
    this.eventsService.submitEvents(events)
      .subscribe(response => {
        this.toastr.success('Event Added Successfully!', 'Success!');
        this.flushEvents();
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Event Added Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  getEventType() {
    this.constantService.getEventType()
      .subscribe(response => {
        this.eventType = response;
      })
  }

  getEventCategory() {
    this.constantService.getEventCategory()
      .subscribe(response => {
        this.eventCategory = response;
      })
  }

  getEventLevel() {
    this.constantService.getEntityLevel()
      .subscribe(response => {
        this.eventLevel = response;
      })
  }

  // While on changing the Event Level
  onChangeEventLevel(value) {

    if (value === 'Department') {
      this.fetchDepartments();
      this.entityId = 'Department';
    } else if (value === 'Batch') {
      this.fetchBatchDetails();
      this.entityId = 'Batch';
    }
  }

  // Fetching the Department details
  fetchDepartments() {
    this.spinnerService.show();
    this.departmentsService.fetchDepartmentDetails()
      .subscribe(response => {
        if (response.length < 1) {
          this.toastr.info('Data Not Found!', 'Info!');
        } else {
          this.EntityID = response;
        }
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('An Error Occured!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // Fetching the Batch Details
  fetchBatchDetails() {
    this.spinnerService.show();
    this.batchService.fetchBatchDetails()
      .subscribe(response => {
        if (response.length < 1) {
          this.toastr.info('Data Not Found!', 'Info!');
        } else {
          this.EntityID = response;
        }
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Request Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  flushEvents() {
    this.events = {
      name: '',
      description: '',
      type: '-1',
      category: '-1',
      entityLevel: 'Institute',
      entityId: '-1',
      beginTimestamp: '',
      endTimestamp: ''
    }

  }

}
