import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ConstantService } from '../../../../../constant.service';
import { DateService } from '../../../../../date.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent implements OnInit {

  students: any = {
    firstName: '',
    lastName: '',
    doj: '',
    dob: '',
    mobile: 0,
    email: ''
  }

  parents: any = {
    firstName: '',
    lastName: '',
    doj: '',
    dob: '',
    mobile: 0,
    email: ''
  }

  guardians: any = [
    {
      guardianType: '-1',
      description: '',
      userInfo: this.parents
    }
  ]

  gaurdianType: any = [];

  constructor(private studentsService: StudentsService,
    private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    vcr: ViewContainerRef,
    private constantService: ConstantService,
    private router: Router,
    private route: ActivatedRoute,
    private dateService: DateService) {

    this.toastr.setRootViewContainerRef(vcr);

    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.getStudents(params.id);
      }
    })

  }

  ngOnInit() {
    this.getGaurdianType();
  }

  // For Fetching the particular student details
  getStudents(id) {
    this.spinnerService.show();
    this.studentsService.fetchStudent(id)
      .subscribe(response => {
        this.students = response.userInfo;
        this.guardians[0] = response.guardians[0];
        this.parents = response.guardians[0].userInfo;
        this.spinnerService.hide();

        this.students.dob = this.dateService.dateConversion(this.students.dob, 'dd-mm-yyyy', 'yyyy-mm-dd');
        this.students.doj = this.dateService.dateConversion(this.students.doj, 'dd-mm-yyyy', 'yyyy-mm-dd');

        this.parents.dob = this.dateService.dateConversion(this.parents.dob, 'dd-mm-yyyy', 'yyyy-mm-dd');
        this.parents.doj = this.dateService.dateConversion(this.parents.doj, 'dd-mm-yyyy', 'yyyy-mm-dd');
      })
  }

  // For getting the Gaurdian Type
  getGaurdianType() {
    this.constantService.getGuardianType()
      .subscribe(response => {
        this.gaurdianType = response;
      })
  }
}
