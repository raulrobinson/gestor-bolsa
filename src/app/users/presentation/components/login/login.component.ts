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

  }

  iniciarSesionConAD(){
    this._authService.loginWithAzureDirectory();
  }

}
