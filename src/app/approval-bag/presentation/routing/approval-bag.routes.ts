import { Routes } from '@angular/router';
import { ApprovalExtensionComponent as ApprovalBagApprovalExtensionComponent} from '../components/approval-extension/approval-extension.component';
import { MenuComponent as ApprovalBagMenuComponent} from '../components/menu/menu.component';

export const ApprovalBagRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: ApprovalBagMenuComponent
  },
  {
    path: "aprobar-prorroga",
    component: ApprovalBagApprovalExtensionComponent
  }
  // {
  //   path: "aprobar-bolsa",
  //   component: CreateBagMoneyComponent
  // },
];
