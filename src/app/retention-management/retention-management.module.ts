import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { EquipmentComponent } from './presentation/components/equipment/equipment.component';
import { MoneyComponent } from './presentation/components/money/money.component';
import { MassiveRetentionComponent } from './presentation/components/massive-retention/massive-retention.component';
import { RetentionManagementRoutingModule } from './presentation/routing/retention-management-routing.module';
import {SvgImporterComponent} from "../global/presentation/components/svg-importer/svg-importer.component";
import { MixedComponent } from './presentation/components/mixed/mixed.component';



@NgModule({
  declarations: [
    MenuComponent,
    EquipmentComponent,
    MoneyComponent,
    MassiveRetentionComponent,
    MixedComponent
  ],
    exports: [
        MenuComponent,
        EquipmentComponent,
        MoneyComponent,
        MassiveRetentionComponent
    ],
  imports: [
    CommonModule,
    RetentionManagementRoutingModule,
    SvgImporterComponent
  ]
})
export class RetentionManagementModule { }
