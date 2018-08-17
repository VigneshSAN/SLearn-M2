import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { ConstantService } from '../../constant.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  institutename: any = [];


  constructor(private Constantservice: ConstantService, private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    vcr: ViewContainerRef, private router: Router, private spinner: NgxSpinnerService) {
      this.toastr.setRootViewContainerRef(vcr);
    }
    ngOnInit() {
      this.institute();
      this.spinner.show();
      setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
      }, 5000);
    }

    institute() {
      this.Constantservice.getInstituteName()
      .subscribe(response => {
          this.institutename = response;
         //  console.log(this.institutename);
      }, error => {
        this.toastr.error('Error Occurred!', 'Error!');
      })
    }

}
