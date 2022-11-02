import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { MoneyComponent } from './presentation/components/money/money.component';
import { EquipmentComponent } from './presentation/components/equipment/equipment.component';



@NgModule({
    declarations: [
        MenuComponent,
        MoneyComponent,
        EquipmentComponent
    ],
  exports: [
    MenuComponent,
    MoneyComponent,
    EquipmentComponent
  ],
    imports: [
        CommonModule
    ]
})
export class CreateBagModule { }
