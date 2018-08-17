import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TermService } from '../term.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantService } from '../../../../../constant.service';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.scss']
})
export class AddTermComponent implements OnInit {

  term: any = {
    name: '',
    type: '-1'
  }

  updateButton: Boolean = false;
  updateDataID: any;

  termType: any = [];

  constructor(private spinnerService: Ng4LoadingSpinnerService,private toastr: ToastsManager, vcr: ViewContainerRef,private constantService:ConstantService,private termService: TermService, private router: Router,
    private route: ActivatedRoute) { 
      this.toastr.setRootViewContainerRef(vcr);
      this.route.params.subscribe( params => {
        if(params.id > 0) {
          this.getTerm(params.id);
          this.updateDataID = params.id;
        }
      })

    }

  ngOnInit() {
    this.getTermType();
  }

  submitTerm(term) {
    this.spinnerService.show();
    this.termService.submitTerm(term)
    .subscribe(response => {
      this.toastr.success('Term Added Successfully!', 'Success!');
      this.router.navigate(['term/term-list']);
      this.spinnerService.hide();
    }, error => {
      console.log(error);
      this.toastr.error('Term Added Failed!', 'Error!');
      this.spinnerService.hide();
    })
  }

  updateTerm(id) {
    this.spinnerService.show();
    this.termService.updateTerm(this.term, id)
    .subscribe(response => {
      this.toastr.success('Term Updated Successfully!', 'Success!');
      this.router.navigate(['term/term-list']);
      this.spinnerService.hide();
    }, error => {
      console.log(error);
      this.toastr.error('Term Update Failed!', 'Error!');
      this.spinnerService.hide();
    })
  }

  getTerm(id) {
    this.spinnerService.show();
    this.termService.getTerm(id)
    .subscribe(response => {
      this.term = response;
      this.updateButton = true;
      this.spinnerService.hide();
    })
  }

  getTermType() {
    this.constantService.getAcademicTermType()
    .subscribe(response => {
      this.termType = response;
    })
  }

  flushTerm() {
    this.term = {
      name: '',
      type: '-1'
    }
  }
  
}
