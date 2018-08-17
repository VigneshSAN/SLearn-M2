import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {

  data: any = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastsManager, vcr: ViewContainerRef, private departmentsService: DepartmentsService, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.fetchDepartments();
  }

  // Fetching the Department details
  fetchDepartments() {
    this.spinnerService.show();

    this.departmentsService.fetchDepartmentDetails()
      .subscribe(response => {
        if (response.length < 1) {
          this.toastr.info('Data Not Found!', 'Info!');
        } else {
          this.data = response;
        }
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('An Error Occured!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // For Updating the Departments
  updateDepartments(id) {
    this.router.navigate(['departments/add-departments', id])
  }

  // For Deleting the Departments
  deleteDepartments(id) {
    this.spinnerService.show();
    this.departmentsService.deleteDepartment(id)
      .subscribe(response => {
        this.toastr.success('Department Deleted Successfully!', 'Success!');
        this.fetchDepartments();
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Department Deleted Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

}
