import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CourseService } from '../course.service';
import { StaffsService } from '../../../people_management/staffs/staffs.service';
import { BatchService } from '../../batch/batch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DepartmentsService } from '../../departments/departments.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  staffs: any = [];
  departments: any = [];
  batchs: any = [];

  updateButton: Boolean = false;
  updateDataID: any;
  BatchID: any = -1;
  departmentID: any = -1;

  staff: any = {
    id: -1,
    firstName: '',
    lastName: ''
  }

  course: any = {
    name: '',
    description: '',
    sessionsPerWeek: 0,
    staff: this.staff
  }

  constructor(private departmentService: DepartmentsService, private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private route: ActivatedRoute, private batchService: BatchService, private staffsService: StaffsService, private courseService: CourseService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.getCourse(params.id);
        this.updateDataID = params.id;
      }
    })
  }

  ngOnInit() {
    this.fetchBatchDetails();
    this.fetchDepartmentDetails();
  }

  onChangeDepartment(value) {
    this.fetchStaffDetails(value);
  }

  submitCourse(course, BatchID) {
    this.spinnerService.show();
    this.courseService.submitCourse(course, BatchID)
      .subscribe(response => {
        this.toastr.success('Course Added Successfully!', 'Success!');
        this.flushCourse();
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Course Added Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  getCourse(id) {
    this.courseService.getCourseDetails(id)
      .subscribe(response => {
        console.log(response);
        this.course = response;
        this.updateButton = true;
      })
  }

  updateCourse(course) {
    this.spinnerService.show();
    this.courseService.updateCourse(course, this.updateDataID)
      .subscribe(response => {
        this.toastr.success('Course Updated Successfully!', 'Success!');
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Course Updated Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // Fetching the Batch Details
  fetchBatchDetails() {
    this.batchService.fetchBatchDetails()
      .subscribe(response => {
        if (response.length < 1) {
          console.log("No Data Found!");
        } else {
          this.batchs = response;
        }
      })
  }

  //fetching the staffs details
  fetchStaffDetails(id) {
    this.staffsService.fetchStaffDetails(id)
      .subscribe(response => {
        this.staffs = response;
      })
  }

  fetchDepartmentDetails() {
    this.departmentService.fetchDepartmentDetails()
      .subscribe(response => {
        console.log(response);
        this.departments = response;
      })
  }

  flushCourse() {
    this.staff = {
      id: -1,
      firstName: '',
      lastName: ''
    }

    this.course = {
      name: '',
      description: '',
      sessionsPerWeek: 0,
      staff: this.staff
    }

    this.BatchID = -1;
    this.departmentID = -1;
  }

}
