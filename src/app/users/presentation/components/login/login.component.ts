import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) {

  }

  ngOnInit(): void {


      // this.setLoginDisplay();
  }

  // setLoginDisplay() {
  //   this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  // }

  iniciarSesionConAD(){
    this._authService.loginWithAzureDirectory();
  }

}
