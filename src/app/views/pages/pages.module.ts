import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule , Ng4LoadingSpinnerModule.forRoot() ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
    
  ]
})
export class PagesModule { }
