import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DeleteBagRoutes} from "./delete-bag.routes";



@NgModule({
  imports: [RouterModule.forChild(DeleteBagRoutes)],
  exports: [RouterModule]
})
export class DeleteBagRoutingModule { }
