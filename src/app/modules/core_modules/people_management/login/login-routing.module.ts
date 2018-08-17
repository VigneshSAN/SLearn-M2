import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : '',
    data : {
      title : 'Authentication'
    },
    children : [
      {
        path : 'login',
        component : LoginComponent,
        data : {
          title : 'Login'
        }
      },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class LoginRoutingModule { }
