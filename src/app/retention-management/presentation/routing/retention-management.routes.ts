import { Routes } from '@angular/router';
import { EquipmentComponent as RetentionManagementEquipmentComponent} from '../components/equipment/equipment.component';
import { MassiveRetentionComponent as RetentionManagementMassiveRetentionComponent} from '../components/massive-retention/massive-retention.component';
import { MoneyComponent as RetentionManagementMoneyComponent} from '../components/money/money.component';
import { MenuComponent as RetentionManagementMenuComponent} from '../components/menu/menu.component';

export const RetentionManagementRoutes: Routes = [

  {
    path: "",
    pathMatch: 'full',
    component: RetentionManagementMenuComponent
  },
  {
    path: "retencion-equipo",
    component: RetentionManagementEquipmentComponent
  },
  {
    path: "retencion-masiva",
    component: RetentionManagementMassiveRetentionComponent
  },
  {
    path: "retencion-dinero",
    component: RetentionManagementMoneyComponent
  },

];
