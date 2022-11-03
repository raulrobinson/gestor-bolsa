import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatchmentManagementRoutes } from './catchment-management.routes';



@NgModule({
  imports: [RouterModule.forChild(CatchmentManagementRoutes)],
  exports: [RouterModule]
})
export class CatchmentManagementRoutingModule { }
