import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { EquipmentComponent } from './presentation/components/equipment/equipment.component';
import { MoneyComponent } from './presentation/components/money/money.component';
import { MassiveRetentionComponent } from './presentation/components/massive-retention/massive-retention.component';



@NgModule({
  declarations: [
    MenuComponent,
    EquipmentComponent,
    MoneyComponent,
    MassiveRetentionComponent
  ],
    exports: [
        MenuComponent,
        EquipmentComponent,
        MoneyComponent,
        MassiveRetentionComponent
    ],
  imports: [
    CommonModule
  ]
})
export class RetentionManagementModule { }
