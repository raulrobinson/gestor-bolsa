import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { MoneyComponent } from './presentation/components/money/money.component';
import { EquipmentComponent } from './presentation/components/equipment/equipment.component';
import { MixedComponent } from './presentation/components/mixed/mixed.component';



@NgModule({
    declarations: [
        MenuComponent,
        MoneyComponent,
        EquipmentComponent,
        MixedComponent
    ],
  exports: [
    MenuComponent,
    MoneyComponent,
    EquipmentComponent,
    MixedComponent
  ],
    imports: [
        CommonModule
    ]
})
export class CreateBagModule { }
