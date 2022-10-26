import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { SidenavItemMenuComponent } from './sidenav/sidenav-item-menu/sidenav-item-menu.component';


@NgModule({
  declarations: [
    SidenavComponent,
    SidenavItemMenuComponent,
    HeaderComponent,
  ],
  exports:[
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
