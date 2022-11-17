import { Inject, Injectable } from '@angular/core';
import { MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { _authMsalImplementation } from '../../infrastructure';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _msalService: MsalService, @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration) { }

  loginWithAzureDirectory(){
    _authMsalImplementation.setupProvider({msalServiceProvider:this._msalService, msalGuardProvider: this.msalGuardConfig});
    _authMsalImplementation.login();
  }
}
