import { Component } from '@angular/core';
import { AuthService } from './users/presentation/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-de-bolsas';
  isIframe = false;
  constructor(private _authService: AuthService){}
  ngOnInit():void{

    this.isIframe = window !== window.parent && !window.opener;
    this._authService.handleUserWithAzureDirectory();

  }
}
