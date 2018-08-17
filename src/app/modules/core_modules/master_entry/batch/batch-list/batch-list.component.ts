import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BatchService } from '../batch.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.scss']
})
export class BatchListComponent implements OnInit {

  data: any = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastsManager, vcr: ViewContainerRef, private batchService: BatchService, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.fetchBatchDetails();
  }

  // Fetching the Batch Details
  fetchBatchDetails() {
    this.spinnerService.show();
    this.batchService.fetchBatchDetails()
      .subscribe(response => {
        if (response.length < 1) {
          this.toastr.info('Data Not Found!', 'Info!');
        } else {
          this.data = response;
          console.log(this.data);
        }
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Request Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

  // For Updating the Batch
  update(id) {
    this.router.navigate(['batch/add-batch', id])
  }

  // For deleting the Batch
  delete(id) {
    this.spinnerService.show();
    this.batchService.deleteBatch(id)
      .subscribe(response => {
        this.toastr.success('Data Deleted Successfully!', 'Success!');
        this.fetchBatchDetails();
        this.spinnerService.hide();
      }, error => {
        console.log(error);
        this.toastr.error('Data Deleted Failed!', 'Error!');
        this.spinnerService.hide();
      })
  }

}
