import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './presentation/components/sidenav/sidenav.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { ContainerComponent } from './presentation/components/container/container.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { NotFoundComponent } from './presentation/components/not-found/not-found.component';
import { ForbiddenComponent } from './presentation/components/forbidden/forbidden.component';
import { WelcomeComponent } from './presentation/components/welcome/welcome.component';
import { GlobalRoutingModule } from './presentation/routing/global-routing.module';
import { SvgImporterComponent } from './presentation/components/svg-importer/svg-importer.component';
import { BreadcrumbComponent } from './presentation/components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    NotFoundComponent,
    ForbiddenComponent,
    WelcomeComponent,
    BreadcrumbComponent,
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    SvgImporterComponent
  ]
})
export class GlobalModule { }
