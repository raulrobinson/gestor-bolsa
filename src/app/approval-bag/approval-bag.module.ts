import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalExtensionComponent } from './presentation/components/approval-extension/approval-extension.component';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { SvgImporterComponent } from '../global/presentation/components/svg-importer/svg-importer.component';
import { ApprovalBagRoutingModule } from './presentation/routing/approval-bag-routing.module';



@NgModule({
  declarations: [
    ApprovalExtensionComponent,
    MenuComponent
  ],
  exports: [
    ApprovalExtensionComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SvgImporterComponent,
    ApprovalBagRoutingModule
  ]
})
export class ApprovalBagModule { }
