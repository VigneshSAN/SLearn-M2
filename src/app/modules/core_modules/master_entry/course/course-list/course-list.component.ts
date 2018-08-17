import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { BatchService } from '../../batch/batch.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  data: any = [];

  selection: any = [];

  constructor(private batchService: BatchService, private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private courseService: CourseService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.getBatchs();
  }

  ngOnInit() {

  }

  fetchCourseDetails(id) {
    this.courseService.fetchCourseDetail(id)
    .subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update(id) {
    this.router.navigate(['course/add-course', id])
  }

  delete(id) {
    this.courseService.deleteCourse(id)
    .subscribe(response => {
      console.log(response);
    })
  }

  select(id) {
    console.log(id);
    this.fetchCourseDetails(id);
  }

  getBatchs() {
    this.spinnerService.show();
    this.batchService.fetchBatchDetails()
      .subscribe(response => {
        if (response.length < 1) {
          this.toastr.info('Data Not Found!', 'Info!');
        } else {
          this.selection = response;
          console.log(this.selection[0].id, this.selection[0].name);
          this.fetchCourseDetails(this.selection[0].id);
        }
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Request Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  gotoAddPage(addRouterLink) {
    this.router.navigate([addRouterLink]);
  }

}
