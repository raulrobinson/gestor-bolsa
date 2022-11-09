import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RetentionManagementRoutes } from './retention-management.routes';



@NgModule({
  imports: [RouterModule.forChild(RetentionManagementRoutes)],
  exports: [RouterModule]
})
export class RetentionManagementRoutingModule { }
