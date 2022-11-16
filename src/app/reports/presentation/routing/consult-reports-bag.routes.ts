import {Routes} from '@angular/router';
import {MenuComponent as ConsultReportsMenuComponent} from '../components/menu/menu.component';
import {GeneralComponent} from "../components/general/general.component";
import {DispatchComponent} from "../components/dispach/dispatch.component";
import {AnalystComponent} from "../components/analist/analyst.component";

export const ConsultReportsBagRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: ConsultReportsMenuComponent
  },
  {
    path: "reporte-general",
    component: GeneralComponent
  },
  {
    path: "reporte-despachos",
    component: DispatchComponent
  },
  {
    path: "consulta-por-analista",
    component: AnalystComponent
  }
];
