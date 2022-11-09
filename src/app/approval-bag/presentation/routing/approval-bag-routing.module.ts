import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApprovalBagRoutes } from './approval-bag.routes';



@NgModule({
  imports: [RouterModule.forChild(ApprovalBagRoutes)],
  exports: [RouterModule]
})
export class ApprovalBagRoutingModule { }
