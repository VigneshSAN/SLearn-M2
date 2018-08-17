import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StaffsService } from '../staffs.service';
import { ConstantService } from '../../../../../constant.service';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  leave: any = {
    startDate: new Date().toISOString().substring(0,10),
    endDate: '',
    message: '',
    leaveType: -1
  }

  leaveType: any = [];

  constructor(private vcr: ViewContainerRef,private toastr: ToastsManager,private spinnerService:Ng4LoadingSpinnerService,private constantService: ConstantService,private staffsService: StaffsService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.fetchLeaveType();
  }

  fetchLeaveType() {
    this.constantService.getLeaveType()
    .subscribe(response => {
      this.leaveType = response;
    })
  }

  submitLeaveRequest() {
    this.spinnerService.show();
    this.staffsService.submitLeaveRequest(this.leave)
    .subscribe(response => {
      this.toastr.success('Department Added Successfully!', 'Success!');
      this.spinnerService.hide();
    }, error => {
      console.log(error);
      this.toastr.error('Department Added Failed!', 'Error!');
      this.spinnerService.hide();
    })
  }

}
