import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditBagRoutes } from './edit-bag.routes';



@NgModule({
  imports: [RouterModule.forChild(EditBagRoutes)],
  exports: [RouterModule]
})
export class EditBagRoutingModule { }
