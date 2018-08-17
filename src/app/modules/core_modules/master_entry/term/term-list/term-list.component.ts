import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TermService } from '../term.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.scss']
})
export class TermListComponent implements OnInit {

  data: any = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService,private toastr: ToastsManager, vcr: ViewContainerRef,private termService: TermService, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.fetchTermDetails();
  }

  // Fetch the TERM Details
  fetchTermDetails() {
    this.spinnerService.show();
    this.termService.fetchTermDetails()
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

  // For update the TERM
  update(id) {
    this.router.navigate(['term/add-term', id])
  }

  // For Delete the TERM
  delete(id) {
    this.spinnerService.show();
    this.termService.deleteTerm(id)
    .subscribe(response => {
      this.toastr.success('Term Deleted Successfully!', 'Success!');
      this.fetchTermDetails();
      this.spinnerService.hide();
    }, error => {
      console.log(error);
      this.toastr.error('Term Deleted Failed!', 'Error!');
      this.spinnerService.hide();
    })
  }

}
