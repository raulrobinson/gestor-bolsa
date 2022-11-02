import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './presentation/components/menu/menu.component';
import { MoneyComponent } from './presentation/components/money/money.component';



@NgModule({
    declarations: [
        MenuComponent,
        MoneyComponent
    ],
  exports: [
    MenuComponent,
    MoneyComponent
  ],
    imports: [
        CommonModule
    ]
})
export class CreateBagModule { }
