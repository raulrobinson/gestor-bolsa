import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteComponent} from './presentation/components/delete/delete.component';
import {MenuComponent} from './presentation/components/menu/menu.component';
import {DeleteBagRoutingModule} from "./presentation/routing/delete-bag-routing.module";
import {SvgImporterComponent} from "../global/presentation/components/svg-importer/svg-importer.component";


@NgModule({
  declarations: [
    DeleteComponent,
    MenuComponent
  ],
  exports: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    DeleteBagRoutingModule,
    SvgImporterComponent
  ]
})
export class DeleteBagModule {
}
