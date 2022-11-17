import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestion-de-bolsas';
  isIframe = false;
  ngOnInit():void{
    this.isIframe = window !== window.parent && !window.opener;
  }
}
