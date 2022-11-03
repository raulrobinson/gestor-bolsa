import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { EquipmentComponent } from './presentation/components/equipment/equipment.component';
import { MoneyComponent } from './presentation/components/money/money.component';



@NgModule({
  declarations: [
    MenuComponent,
    EquipmentComponent,
    MoneyComponent
  ],
  exports: [
    MenuComponent,
    EquipmentComponent,
    MoneyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RetentionManagementModule { }
