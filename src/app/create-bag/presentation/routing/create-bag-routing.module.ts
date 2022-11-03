import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateBagRoutes } from './create-bag.routes';



@NgModule({
  imports: [RouterModule.forChild(CreateBagRoutes)],
  exports: [RouterModule]
})
export class CreateBagRoutingModule { }
