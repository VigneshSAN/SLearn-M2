import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { BatchService } from '../../../master_entry/batch/batch.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit {

  data: any = [];

  selection: any = [];

  constructor(private batchService: BatchService , private studentsService: StudentsService, private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    vcr: ViewContainerRef, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.getBatchs();
  }

  fetchStudents(id) {
    this.spinnerService.show();
    this.studentsService.fetchStudentsDetail(id)
      .subscribe(response => {
        if (response.length < 1) {
          this.toastr.info('No Data Found!');
        } else {
          console.log(response);
          this.data = response;
        }
        this.spinnerService.hide();
      }, error => {
        this.toastr.error('Error Occurred!', 'Error!');
        this.spinnerService.hide();
      })
  }

  updateStudents(id) {
    this.router.navigate(['students/add-students', id])
  }

  viewStudents(id) {
    this.router.navigate(['students/view-students', id])
  }

  deleteStudents(id) {
    this.spinnerService.show();
    this.studentsService.deleteStudents(id)
      .subscribe(response => {
        this.toastr.success('Data Deleted Successfully!', 'Success!');
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Deleted Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  getBatchs() {
    this.batchService.fetchBatchDetails()
    .subscribe(response => {
      console.log(response);
      this.selection = response;
      this.fetchStudents(this.selection[0].id);
    })
  }

  select(id) {
    this.fetchStudents(id);
  }

  gotoAddPage(addRouterLink) {
    this.router.navigate([addRouterLink]);
  }

}
