import { Routes } from '@angular/router';
import { MenuComponent as CreateBagMenuComponent } from './create-bag/presentation/components/menu/menu.component';
import { MenuComponent as CatchmentManagementMenuComponent } from './catchment-management/presentation/components/menu/menu.component';

export const AppRoutes: Routes = [
  {
    path: "crear-bolsa",
    component: CreateBagMenuComponent
  },
  {
    path: "gestion-captacion",
    component: CatchmentManagementMenuComponent
  }
];
