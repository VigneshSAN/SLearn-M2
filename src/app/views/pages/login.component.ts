import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router'
import { ConstantService } from '../../constant.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private spinnerService: Ng4LoadingSpinnerService,
    private toastr: ToastsManager,
    vcr: ViewContainerRef, private router: Router,
    private constService: ConstantService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  loginUser(e) {
    this.spinnerService.show();
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    this.constService.getToken(username, password)
      .subscribe(response => {
        console.log(response);
        if (response.code == -100)
        {
          this.spinnerService.hide();
          this.toastr.error("User Name Or Password is Wrong","Login Error ?");
        }
        else
        {
          this.constService.setCookie('AccessToken',response.sessionToken);
          // $("#test").html("<img id='setCookieImg' src='http://52.15.179.93:8080/slearn_v0.2/rest/Test/setCookie/" + response.sessionToken + "/-1'/>");
          this.getUserId();
          this.spinnerService.hide();
        }
      },
      err => { 
        this.toastr.error("Invalid Credentials","Login Error ?"); 
        this.spinnerService.hide();
     },
     () => { 
      this.spinnerService.hide();
    }
    )
  }

  // setToken(token, userID) {
  //   this.constService.setToken(token, userID).subscribe(response => {
  //     console.log(response);
  //     if (response) {
  //       if (response.status == 200) {
  //         setTimeout(() => {
  //           console.log(this.constService.getCookie('AccessToken'));
  //           this.getUserId();
  //         }, 500);
  //       }
  //     }
  //   });
  // }

  getUserId() {
    this.constService.getUserId()
      .subscribe(response => {
        //console.log(response);
        this.constService.setCookie('UserID',response[0].roleId);
        if (response[0].type == "Staff" && response[0].privilege == "Admin") {
          localStorage.setItem('usertype', "Admin");
          this.router.navigate(['/students/dashboard']);
        } else if (response[0].type == "Staff" && response[0].privilege == "User") {
          localStorage.setItem('usertype', "Staff");
          this.router.navigate(['/staffs/dashboard']);
        } else if (response[0].type == "Student" && response[0].privilege == "User") {
          localStorage.setItem("usertype", "Student");
          this.router.navigate(['/students/dashboard']);
        }

      }, error => {
        this.toastr.error(error,"Login Error ?"); 
        this.spinnerService.hide(); 
        // this.setToken(this.constService.getCookie('AccessToken') , -1)
      })
  }



}
