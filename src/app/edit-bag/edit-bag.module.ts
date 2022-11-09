import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { ExtensionRequestComponent } from './presentation/components/extension-request/extension-request.component';
import { EditBagComponent } from './presentation/components/edit-bag/edit-bag.component';
import { EditBagRoutingModule } from './presentation/routing/edit-bag-routing.module';
import { SvgImporterComponent } from './../global/presentation/components/svg-importer/svg-importer.component';



@NgModule({
  declarations: [
    MenuComponent,
    ExtensionRequestComponent,
    EditBagComponent
  ],
  imports: [
    CommonModule,
    EditBagRoutingModule,
    SvgImporterComponent
  ]
})
export class EditBagModule { }
