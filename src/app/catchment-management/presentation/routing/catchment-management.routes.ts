import { Routes } from '@angular/router';
import { EquipmentComponent as CatchmentManagementEquipmentComponent} from '../components/equipment/equipment.component';
import { MoneyComponent as CatchmentManagementMoneyComponent} from '../components/money/money.component';
import { MenuComponent as CatchmentManagementMenuComponent} from '../components/menu/menu.component';
import { MixedComponent as CatchmentManagementMixedComponent} from '../components/mixed/mixed.component';

export const CatchmentManagementRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: CatchmentManagementMenuComponent
  },
  {
    path: "captacion-equipo",
    component: CatchmentManagementEquipmentComponent
  },
  {
    path: "captacion-dinero",
    component: CatchmentManagementMoneyComponent
  },
  {
    path: "captacion-mixta",
    component: CatchmentManagementMixedComponent
  }
];
