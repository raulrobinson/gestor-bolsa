import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { MoneyComponent } from './presentation/components/money/money.component';
import { EquipmentComponent } from './presentation/components/equipment/equipment.component';
import { CatchmentManagementRoutingModule } from './presentation/routing/catchment-management-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
    MoneyComponent,
    EquipmentComponent
  ],
  exports: [
    MenuComponent,
    MoneyComponent
  ],
  imports: [
    CommonModule,
    CatchmentManagementRoutingModule
  ]
})
export class CatchmentManagementModule { }
