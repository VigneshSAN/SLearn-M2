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
    e.preventDefault();

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    this.constService.getToken(username, password)
      .subscribe(response => {
        console.log(response);
        this.constService.setCookie('AccessToken',response.sessionToken);
        $("#test").html("<img id='setCookieImg' src='http://52.15.179.93:8080/slearn_v0.2/rest/Test/setCookie/" + response.sessionToken + "/-1'/>");
      })
  }

  setToken(token, userID) {
    this.constService.setToken(token, userID).subscribe(response => {
      console.log(response);
      if (response) {
        if (response.status == 200) {
          setTimeout(() => {
            console.log(this.constService.getCookie('AccessToken'));
            this.getUserId();
          }, 500);
        }
      }
    });
  }

  getUserId() {
    this.constService.getUserId()
      .subscribe(response => {
        this.setUserId(response[0]);
      }, error => {
        console.log(error);
        // this.setToken(this.constService.getCookie('AccessToken') , -1)
      })
  }

  setUserId(user) {
    this.constService.setCookie('UserID',user.roleId);
    $("#red").html("<img id='setCookieImg' src='http://52.15.179.93:8080/slearn_v0.2/rest/Test/setCookie/" + this.constService.getCookie('AccessToken') + "/"+ user.roleId +"'/>");
    this.constService.setToken(this.constService.getCookie('AccessToken'), user.roleId)
      .subscribe(response => {
        if (user.type == "Staff" && user.privilege == "Admin") {
          localStorage.setItem('usertype', "Admin");
          this.router.navigate(['/students/dashboard']);
        } else if (user.type == "Staff" && user.privilege == "User") {
          localStorage.setItem('usertype', "Staff");
          this.router.navigate(['/staffs/dashboard']);
        } else if (user.type == "Student" && user.privilege == "User") {
          localStorage.setItem("usertype", "Student");
          this.router.navigate(['/students/dashboard']);
        }
      })
  }


}
