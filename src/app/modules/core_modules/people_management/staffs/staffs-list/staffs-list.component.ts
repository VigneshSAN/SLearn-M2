import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StaffsService } from '../staffs.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DepartmentsService } from '../../../master_entry/departments/departments.service';

@Component({
  selector: 'app-staffs-list',
  templateUrl: './staffs-list.component.html',
  styleUrls: ['./staffs-list.component.scss']
})
export class StaffsListComponent implements OnInit {

  data: any = [];

  selection: any = [];

  constructor(private departmentService: DepartmentsService, private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastsManager, vcr: ViewContainerRef, private staffsService: StaffsService,
    private router: Router) {
      this.toastr.setRootViewContainerRef(vcr);
      this.getDepartments();
  }

  ngOnInit() {
  }

  // For Fetching the Staffs Details
  fetchStaffDetails(id) {
    this.spinnerService.show();

    this.staffsService.fetchStaffDetails(id)
      .subscribe(response => {
        if (response.length < 1) {
          this.toastr.info('No Data Found!');
        } else {
          this.data = response;
         // console.log(this.data);
        }
        this.spinnerService.hide();
      }, error => {
        this.toastr.error('Error Occurred!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // Deleting the Staffs Details
  deleteStaffs(id) {
    this.spinnerService.show();
    this.staffsService.deleteStaffs(id)
      .subscribe(response => {
          this.toastr.success('Data Deleted Successfully!', 'Success!');
          this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Deleted Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // For Updating the Staffs Details
  updateStaffs(id) {
    this.router.navigate(['staffs/add-staffs', id])
  }

  // For view the details of the Particular Staff
  // viewStaff(id) {
  //   this.router.navigate(['staffs/staff-details', id])
  // }

  getDepartments() {
    this.departmentService.fetchDepartmentDetails()
    .subscribe(response => {
      this.selection = response;
      this.fetchStaffDetails(this.selection[0].id)
    })
  }

  select(id) {
    this.fetchStaffDetails(id);
  }

  gotoAddPage(addRouterLink) {
    this.router.navigate([addRouterLink]);
  }

}
