import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralComponent} from './presentation/components/general/general.component';
import {AnalystComponent} from './presentation/components/analist/analyst.component';
import {DispatchComponent} from './presentation/components/dispach/dispatch.component';
import {MenuComponent} from './presentation/components/menu/menu.component';
import {SvgImporterComponent} from "../global/presentation/components/svg-importer/svg-importer.component";
import {ConsultReportsRoutingModule} from "./presentation/routing/consult-reports-routing.module";


@NgModule({
  declarations: [
    GeneralComponent,
    AnalystComponent,
    DispatchComponent,
    MenuComponent
  ],
  exports: [
    GeneralComponent,
    AnalystComponent,
    DispatchComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SvgImporterComponent,
    ConsultReportsRoutingModule
  ]
})
export class ReportsModule { }
