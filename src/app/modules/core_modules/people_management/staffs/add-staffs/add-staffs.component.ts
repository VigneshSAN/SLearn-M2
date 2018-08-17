import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StaffsService } from '../staffs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
import { DateService } from '../../../../../date.service';
import { DepartmentsService } from '../../../master_entry/departments/departments.service';

@Component({
  selector: 'app-add-staffs',
  templateUrl: './add-staffs.component.html',
  styleUrls: ['./add-staffs.component.scss']
})
export class AddStaffsComponent implements OnInit {

  staffs: any = {
    firstName: '',
    lastName: '',
    doj: '',
    dob: '',
    mobile: 0,
    email: ''
  }

  updateButton: Boolean = false;
  updateDataID: any;

  departmentID: any = '-1';
  selection:any;

  constructor(private departmentService: DepartmentsService,private dateService: DateService,private spinnerService: Ng4LoadingSpinnerService,private toastr: ToastsManager, vcr: ViewContainerRef, private staffsService: StaffsService,
    private router: Router,
    private route: ActivatedRoute) {

    this.toastr.setRootViewContainerRef(vcr);

    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.getStaffs(params.id);
        this.updateDataID = params.id;
      }
    })
  }

  ngOnInit() {
    this.getDepartments();
  }

  submitStaffs(staffs) {
    this.spinnerService.show();

    this.staffs.dob = new DatePipe('en-US').transform(this.staffs.dob, 'dd-MM-yyyy');
    this.staffs.doj = new DatePipe('en-US').transform(this.staffs.doj, 'dd-MM-yyyy');

    this.staffsService.submitStaffs(staffs, this.departmentID)
      .subscribe(response => {
        this.toastr.success('Data Added Successfully!', 'Success!');
        this.flushStaff();
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Added Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  updateStaffs(staffs) {
    this.spinnerService.show();

    this.staffs.dob = new DatePipe('en-US').transform(this.staffs.dob, 'dd-MM-yyyy');
    this.staffs.doj = new DatePipe('en-US').transform(this.staffs.doj, 'dd-MM-yyyy');

    this.staffsService.updateStaffs(staffs, this.updateDataID)
    .subscribe(response => {
      this.toastr.success('Data Updated Successfully!', 'Success!');
      this.spinnerService.hide();
    }, error => {
      console.log(error);
      this.toastr.error('Data updated Failed!', 'Error!');
      this.spinnerService.hide();
    })
  }

  getDepartments() {
    this.departmentService.fetchDepartmentDetails()
    .subscribe(response => {
      this.selection = response;
    })
  }

  getStaffs(id) {
    this.spinnerService.show();
    this.staffsService.getStaffs(id)
      .subscribe(response => {
        this.staffs = response.userInfo;
        this.updateButton = true;
        this.spinnerService.hide();

        this.staffs.dob = this.dateService.dateConversion(this.staffs.dob, 'dd-mm-yyyy','yyyy-mm-dd')
        this.staffs.doj = this.dateService.dateConversion(this.staffs.doj, 'dd-mm-yyyy','yyyy-mm-dd')
      })
  }

  flushStaff() {
    this.staffs = {
      firstName: '',
      lastName: '',
      doj: '',
      dob: '',
      mobile: 0,
      email: ''
    }

    this.departmentID = -1;
  }

}
