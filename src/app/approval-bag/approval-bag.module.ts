import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalExtensionComponent } from './presentation/components/approval-extension/approval-extension.component';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { SvgImporterComponent } from '../global/presentation/components/svg-importer/svg-importer.component';
import { ApprovalBagRoutingModule } from './presentation/routing/approval-bag-routing.module';
import { ApproveComponent } from './presentation/components/approve/approve.component';



@NgModule({
  declarations: [
    ApprovalExtensionComponent,
    MenuComponent,
    ApproveComponent
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
