import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalExtensionComponent } from './presentation/components/approval-extension/approval-extension.component';
import { MenuComponent } from './presentation/components/menu/menu.component';



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
    CommonModule
  ]
})
export class ApprovalBagModule { }
