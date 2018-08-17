import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ConstantService } from '../../../../../constant.service';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  leave: any = {
    startDate: new Date().toISOString().substring(0, 10),
    endDate: '',
    message: '',
    leaveType: -1
  }

  leaveType: any = [];

  constructor(private vcr: ViewContainerRef, private toastr: ToastsManager, private spinnerService: Ng4LoadingSpinnerService, private constantService: ConstantService, private studentsService: StudentsService) {
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
    this.studentsService.submitLeaveRequest(this.leave)
    .subscribe(response => {
      this.toastr.success('Leave Request Added Successfully!', 'Success!');
      this.spinnerService.hide();
    }, error => {
      console.log(error);
      this.toastr.error('Leave Request  Added Failed!', 'Error!');
      this.spinnerService.hide();
    })
  }

}
