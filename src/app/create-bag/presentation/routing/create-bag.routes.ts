import { Routes } from '@angular/router';
import { EquipmentComponent as CreateBagEquipmentComponent} from '../components/equipment/equipment.component';
import { MixedComponent as CreateBagMixedComponent} from '../components/mixed/mixed.component';
import { MoneyComponent as CreateBagMoneyComponent} from '../components/money/money.component';
import { MenuComponent as CreateBagMenuComponent} from '../components/menu/menu.component';

export const CreateBagRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: CreateBagMenuComponent
  },
  {
    path: "bolsa-equipo",
    component: CreateBagEquipmentComponent
  },
  {
    path: "bolsa-dinero",
    component: CreateBagMoneyComponent
  },
  {
    path: "bolsa-mixta",
    component: CreateBagMixedComponent
  },
];
