import { MsalService, MsalGuardConfiguration } from '@azure/msal-angular';
import { IAuthRepository } from "../domain/repositories/auth-interface.repository";
import { InteractionType, AuthenticationResult, PopupRequest, RedirectRequest } from '@azure/msal-browser';

export class AuthMsalImplementation implements IAuthRepository<void>{

  private _msalProviderService!: MsalService;
  private _msalGuardConfig!: MsalGuardConfiguration;

  constructor() {
  }

  setupProvider(params: { msalServiceProvider?: any, msalGuardProvider: any }): void {
    this._msalProviderService = params.msalServiceProvider;
    this._msalGuardConfig = params.msalGuardProvider;
  }

  login(): void {


    // this._msalProviderService.loginPopup()
    // .subscribe((response: AuthenticationResult) => {
    //   this._msalProviderService.instance.setActiveAccount(response.account);
    // });



    if (this._msalGuardConfig.authRequest) {
      let r:RedirectRequest = ({ ...this._msalGuardConfig.authRequest } as RedirectRequest);
      r.redirectUri="/";
      debugger;
      this._msalProviderService.loginRedirect(r);
    } else {
      this._msalProviderService.loginRedirect();
    }


    // if (this._msalGuardConfig.interactionType === InteractionType.Popup) {
    //   if (this._msalGuardConfig.authRequest) {
    //     this._msalProviderService.loginPopup({ ...this._msalGuardConfig.authRequest } as PopupRequest)
    //       .subscribe((response: AuthenticationResult) => {
    //         this._msalProviderService.instance.setActiveAccount(response.account);
    //       });
    //   } else {
    //     this._msalProviderService.loginPopup()
    //       .subscribe((response: AuthenticationResult) => {
    //         this._msalProviderService.instance.setActiveAccount(response.account);
    //       });
    //   }
    // }
    // } else {
    //   if (this._msalGuardConfig.authRequest) {
    //     this._msalProviderService.loginRedirect({ ...this._msalGuardConfig.authRequest } as RedirectRequest);
    //   } else {
    //     this._msalProviderService.loginRedirect();
    //   }
    // }




  }
  logOut(): void {
    throw new Error('Method not implemented.');
  }


}
