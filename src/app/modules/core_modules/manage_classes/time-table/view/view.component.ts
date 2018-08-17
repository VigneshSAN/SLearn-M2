import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from '../../../../../../../node_modules/ng2-toastr';
import { TimeTableService } from '../time-table.service';
import { BatchService } from '../../../master_entry/batch/batch.service';
import { ConstantService } from '../../../../../constant.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  batchID: any ;
  Batchs: any = [];

  GeneratedSchedule: any = [];

  Monday: any = [];
  Tuesday: any = [];
  Wednesday: any = [];
  Thursday: any = [];
  Friday: any = [];

  constructor(private toastr: ToastsManager, vcr: ViewContainerRef, private ttservice: TimeTableService, private batchService: BatchService, private constService: ConstantService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.fetchBatchDetails();
  }

  ngOnInit() {
  }

  fetchBatchDetails() {
    this.batchService.fetchBatchDetails()
    .subscribe(response => {
      console.log(response);
      this.Batchs = response;
      this.fetchTimeTable(response[0].id);
    })
  }

  select(batchID) {
    this.batchID = batchID;
    this.fetchTimeTable(batchID);
  }

  fetchTimeTable(batchID) {
    this.ttservice.fetchTT(batchID)
    .subscribe(response => {
      console.log(response);
      if(response[0].type == 'Unallocated') {
        this.GeneratedSchedule = [];
        this.flushing();
        this.toastr.info('Timetable not yet  Generated!', 'Info!');
      } else {
        this.flushing();
        this.GeneratedSchedule = response;
        this.Converting();
      }
    })
  }

  reset() {
    this.ttservice.resetSingleTT(this.batchID)
    .subscribe(response => {
      this.GeneratedSchedule = [];
        this.flushing();
        this.toastr.success('Timetable resetted successfully!', 'Success!');
    })
  }

  flushing() {
    this.Monday = [];
    this.Tuesday  = [];
    this.Wednesday = [];
    this.Thursday = [];
    this.Friday = [];
  }

  Converting() {
    for (let i = 0; i < 8; i++) {
      this.Monday.push(this.GeneratedSchedule[i]);
    }

    for (let i = 0; i < 8; i++) {
      this.GeneratedSchedule.splice(i, 1);
    }

    for (let i = 0; i < 8; i++) {
      this.Tuesday.push(this.GeneratedSchedule[i]);
    }

    for (let i = 0; i < 8; i++) {
      this.GeneratedSchedule.splice(i, 1);
    }

    for (let i = 0; i < 8; i++) {
      this.Wednesday.push(this.GeneratedSchedule[i]);
    }

    for (let i = 0; i < 8; i++) {
      this.GeneratedSchedule.splice(i, 1);
    }

    for (let i = 0; i < 8; i++) {
      this.Thursday.push(this.GeneratedSchedule[i]);
    }

    for (let i = 0; i < 8; i++) {
      this.GeneratedSchedule.splice(i, 1);
    }

    for (let i = 0; i < 8; i++) {
      this.Friday.push(this.GeneratedSchedule[i]);
    }
  }
}
