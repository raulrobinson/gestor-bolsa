import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './presentation/components/sidenav/sidenav.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { ContainerComponent } from './presentation/components/container/container.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { SidenavItemMenuComponent } from './presentation/components/sidenav-item-menu/sidenav-item-menu.component';
import { NotFoundComponent } from './presentation/components/not-found/not-found.component';
import { ForbiddenComponent } from './presentation/components/forbidden/forbidden.component';
import { WelcomeComponent } from './presentation/components/welcome/welcome.component';
import { GlobalRoutingModule } from './presentation/routing/global-routing.module';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    SidenavItemMenuComponent,
    NotFoundComponent,
    ForbiddenComponent,
    WelcomeComponent,
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule
  ]
})
export class GlobalModule { }
