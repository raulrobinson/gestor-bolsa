import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyComponent } from './money/money.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
    declarations: [
        MoneyComponent,
        MenuComponent
    ],
    exports: [
        MoneyComponent,
        MenuComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CreateBagModule { }
