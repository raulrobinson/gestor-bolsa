import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GlobalModule} from './global/global.module';
import {CreateBagModule} from "./create-bag/create-bag.module";
import {CatchmentManagementModule} from "./catchment-management/catchment-management.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GlobalModule,
    CreateBagModule,
    CatchmentManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
