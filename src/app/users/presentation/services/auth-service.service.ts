import { Inject, Injectable } from '@angular/core';
import { MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG, MsalBroadcastService } from '@azure/msal-angular';
import { _authMsalImplementation } from '../../infrastructure';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router:Router, private _msalService: MsalService, private _msalBroadcastService: MsalBroadcastService, @Inject(MSAL_GUARD_CONFIG) private _msalGuardConfig: MsalGuardConfiguration) {
    this.onAuthSuccess=this.onAuthSuccess.bind(this);
   }

  onAuthSuccess(){
    this._router.navigate(["/crear-bolsa"])
  }

  setupAzureProvider(){
    _authMsalImplementation.setupProvider({ msalServiceProvider: this._msalService, msalGuardProvider: this._msalGuardConfig, msalBroadcastService: this._msalBroadcastService, onAuthSuccess: this.onAuthSuccess });
  }

  loginWithAzureDirectory() {
    this.setupAzureProvider();
    _authMsalImplementation.login();
  }
  handleUserWithAzureDirectory(){
    this.setupAzureProvider();
    _authMsalImplementation.handleUserAuth();
  }
}
