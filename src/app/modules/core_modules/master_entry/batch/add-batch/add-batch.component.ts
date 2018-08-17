import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BatchService } from '../batch.service';
import { StaffsService } from '../../../people_management/staffs/staffs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../../departments/departments.service';
import { TermService } from '../../term/term.service';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.scss']
})
export class AddBatchComponent implements OnInit {

  staffs: any = [];
  departments: any = [];
  terms: any = [];
  TermID: any = -1;
  departmentID: any = -1;

  inchargeStaff: any = {
    id: -1,
    firstName: '',
    lastName: ''
  }

  batch: any = {
    name: '',
    description: '',
    idPrefix: '',
    inchargeStaff: this.inchargeStaff
  }

  updateDataID: any;
  updateButton: Boolean = false;

  constructor(private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastsManager, vcr: ViewContainerRef, private termService: TermService, private departmentService: DepartmentsService, private batchService: BatchService, private staffsService: StaffsService, private router: Router,
    private route: ActivatedRoute) {
    this.toastr.setRootViewContainerRef(vcr);

    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.getBatchDetails(params.id);
        this.updateDataID = params.id;
      }
    })
  }

  ngOnInit() {
    this.getTerms();
    this.getDepartments(); // for fetching the departments
  }

  // For submitting the Batch Details
  submitBatch(batch, TermID) {
    this.spinnerService.show();
    this.batchService.submitBatch(batch, TermID)
      .subscribe(response => {
        this.toastr.success('Batch Added Successfully!', 'Success!');
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Batch Added Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // For getting the TERMS
  getTerms() {
    this.termService.fetchTermDetails()
      .subscribe(response => {
        this.terms = response;
      })
  }

  getDepartments() {
    this.departmentService.fetchDepartmentDetails()
      .subscribe(response => {
        console.log(response);
        this.departments = response;
      }, error => {
        console.log(error);
        this.toastr.error('Department fetching Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  onChangeDepartment(value) {
    this.fetchStaffDetails(value);
  }

  // getting the batch details
  getBatchDetails(id) {
    this.batchService.getBatch(id)
      .subscribe(response => {
        console.log(response);
        this.batch = response;
        this.inchargeStaff = response.inchargeStaff;
        this.updateButton = true;
      })
  }

  // For updating the batch details
  updateBatch(id) {
    this.spinnerService.show();
    this.batchService.updateBatch(this.batch, id)
      .subscribe(response => {
        this.toastr.success('Batch Updated Successfully!', 'Success!');
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Batch Updated Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  //fetching the staffs details
  fetchStaffDetails(id) {
    this.spinnerService.show();
    this.staffsService.fetchStaffDetails(id)
      .subscribe(response => {
        this.staffs = response;
      })
    this.spinnerService.hide();
  }

  flushBatch() {
    this.TermID = -1;
    this.departmentID = -1;

    this.inchargeStaff = {
      id: -1,
      firstName: '',
      lastName: ''
    }

    this.batch = {
      name: '',
      description: '',
      idPrefix: '',
      inchargeStaff: this.inchargeStaff
    }
  }

}
