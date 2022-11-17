import { MsalService, MsalGuardConfiguration, MsalBroadcastService } from '@azure/msal-angular';
import { IAuthRepository } from "../domain/repositories/auth-interface.repository";
import { InteractionType, AuthenticationResult, PopupRequest, RedirectRequest, EventType, EventMessage } from '@azure/msal-browser';
import { filter } from 'rxjs';

export class AuthMsalImplementation implements IAuthRepository<void>{

  private _msalProviderService!: MsalService;
  private _msalGuardConfig!: MsalGuardConfiguration;
  private _msalBroadcastService!: MsalBroadcastService;
  private _onAuthSuccess!: Function;
  constructor() {
  }

  setupProvider(params: { msalServiceProvider?: any, msalGuardProvider: any,  msalBroadcastService: any, onAuthSuccess: any}): void {
    this._msalProviderService = params.msalServiceProvider;
    this._msalGuardConfig = params.msalGuardProvider;
    this._msalBroadcastService= params.msalBroadcastService;
    this._onAuthSuccess=params.onAuthSuccess;
  }

  login(): void {

    if (this._msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this._msalGuardConfig.authRequest) {
        this._msalProviderService.loginPopup({ ...this._msalGuardConfig.authRequest } as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this._msalProviderService.instance.setActiveAccount(response.account);
          });
      } else {
        this._msalProviderService.loginPopup()
          .subscribe((response: AuthenticationResult) => {
            this._msalProviderService.instance.setActiveAccount(response.account);
          });
      }
    }
    else {
      if (this._msalGuardConfig.authRequest) {
        this._msalProviderService.loginRedirect({ ...this._msalGuardConfig.authRequest } as RedirectRequest);
      } else {
        this._msalProviderService.loginRedirect();
      }
    }

  }
  handleUserAuth(): void {
    this._msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS || msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this._msalProviderService.instance.setActiveAccount(payload.account);
        this._onAuthSuccess();
      });

  }
  logOut(): void {
    throw new Error('Method not implemented.');
  }


}
