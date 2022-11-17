import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './presentation/components/login/login.component';
import { SignupComponent } from './presentation/components/signup/signup.component';
import { ForgetPasswordComponent } from './presentation/components/forget-password/forget-password.component';
import { UserRoutingModule } from './presentation/routing/users-routing.module';
import { SvgImporterComponent } from '../global/presentation/components/svg-importer/svg-importer.component';
import { MsalService, MsalGuard } from '@azure/msal-angular';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SvgImporterComponent,
  ],
  providers:[MsalService, MsalGuard]
})
export class UsersModule { }
