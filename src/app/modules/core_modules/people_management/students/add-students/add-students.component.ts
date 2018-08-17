import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateService } from '../../../../../date.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastsManager } from 'ng2-toastr';
import { ConstantService } from '../../../../../constant.service';
import { DatePipe } from '@angular/common';
import { BatchService } from '../../../master_entry/batch/batch.service';
import { frLocale } from 'ngx-bootstrap';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit {

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD-MM-YYYY',
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

  students: any = {
    firstName: '',
    lastName: '',
    doj: '',
    dob: '',
    mobile: 0,
    email: ''
  }

  parents: any = {
    firstName: '',
    lastName: '',
    doj: '',
    dob: '',
    mobile: 0,
    email: ''
  }

  guardians: any = [
    {
      guardianType: '-1',
      description: '',
      userInfo: this.parents
    }
  ]

  gaurdianType: any = [];
  updateButton: Boolean = false;
  updateDataID: any;

  batch: any;

  selection: any;

  constructor(private studentsService: StudentsService,
    private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    private batchService: BatchService,
    vcr: ViewContainerRef,
    private constantService: ConstantService,
    private router: Router,
    private route: ActivatedRoute,
    private dateService: DateService) {

    this.toastr.setRootViewContainerRef(vcr);

    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.getStudents(params.id);
        this.updateDataID = params.id;
      }
    })

  }

  ngOnInit() {
    this.getGaurdianType();
    this.getBatchs();
  }

  // For submitting the Students and their parent details
  submitStudents(students, guardians) {
    this.spinnerService.show();

    this.students.dob = new DatePipe('en-US').transform(this.students.dob, 'dd-MM-yyyy');
    this.students.doj = new DatePipe('en-US').transform(this.students.doj, 'dd-MM-yyyy');

    this.parents.dob = new DatePipe('en-US').transform(this.parents.dob, 'dd-MM-yyyy');
    this.parents.doj = new DatePipe('en-US').transform(this.parents.doj, 'dd-MM-yyyy');

    this.studentsService.submitStudents(students, guardians, this.batch)
      .subscribe(response => {
        this.toastr.success('Data Added Successfully!', 'Success!');
        this.flushStudents();
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Added Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // For Fetching the particular student details
  getStudents(id) {
    this.spinnerService.show();
    this.studentsService.fetchStudent(id)
      .subscribe(response => {
        this.students = response.userInfo;
        this.guardians[0] = response.guardians[0];
        this.parents = response.guardians[0].userInfo;
        this.updateButton = true;
        this.spinnerService.hide();

        this.students.dob = this.dateService.dateConversion(this.students.dob, 'dd-mm-yyyy', 'yyyy-mm-dd')
        this.students.doj = this.dateService.dateConversion(this.students.doj, 'dd-mm-yyyy', 'yyyy-mm-dd')

        this.parents.dob = this.dateService.dateConversion(this.parents.dob, 'dd-mm-yyyy', 'yyyy-mm-dd')
        this.parents.doj = this.dateService.dateConversion(this.parents.doj, 'dd-mm-yyyy', 'yyyy-mm-dd')
      })
  }

  // For Updating the Students and their Parent Details
  updateStudents(students, guardians) {
    this.spinnerService.show();

    this.students.dob = new DatePipe('en-US').transform(this.students.dob, 'dd-MM-yyyy');
    this.students.doj = new DatePipe('en-US').transform(this.students.doj, 'dd-MM-yyyy');

    this.parents.dob = new DatePipe('en-US').transform(this.parents.dob, 'dd-MM-yyyy');
    this.parents.doj = new DatePipe('en-US').transform(this.parents.doj, 'dd-MM-yyyy');

    this.studentsService.updateStudents(students, guardians, this.updateDataID)
      .subscribe(response => {
        this.toastr.success('Data Updated Successfully!', 'Success!');
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data updated Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  getBatchs() {
    this.batchService.fetchBatchDetails()
    .subscribe(response => {
      console.log(response);
      this.selection = response;
    })
  }

  viewStudents() {

  }

  // For getting the Gaurdian Type
  getGaurdianType() {
    this.constantService.getGuardianType()
      .subscribe(response => {
        this.gaurdianType = response;
      })
  }

  flushStudents() {
    this.students = {
      firstName: '',
      lastName: '',
      doj: '',
      dob: '',
      mobile: 0,
      email: ''
    }
  
    this.parents = {
      firstName: '',
      lastName: '',
      doj: '',
      dob: '',
      mobile: 0,
      email: ''
    }
  
    this.guardians = [
      {
        guardianType: '-1',
        description: '',
        userInfo: this.parents
      }
    ]
  }


}
