import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './presentation/components/login/login.component';
import { SignupComponent } from './presentation/components/signup/signup.component';
import { ForgetPasswordComponent } from './presentation/components/forget-password/forget-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
