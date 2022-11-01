import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './presentation/components/sidenav/sidenav.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { ContainerComponent } from './presentation/components/container/container.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { SidenavItemMenuComponent } from './presentation/components/sidenav-item-menu/sidenav-item-menu.component';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    SidenavItemMenuComponent
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GlobalModule { }
