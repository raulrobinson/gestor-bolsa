import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultReportsBagRoutes } from './consult-reports-bag.routes';



@NgModule({
  imports: [RouterModule.forChild(ConsultReportsBagRoutes)],
  exports: [RouterModule]
})
export class ConsultReportsRoutingModule { }
