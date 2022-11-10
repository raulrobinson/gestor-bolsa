import { Routes } from '@angular/router';
import { ApprovalExtensionComponent as ApprovalBagApprovalExtensionComponent} from '../components/approval-extension/approval-extension.component';
import { MenuComponent as ApprovalBagMenuComponent} from '../components/menu/menu.component';
import { ApproveComponent as ApprovalCreateBagComponent} from "../components/approve/approve.component";

export const ApprovalBagRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: ApprovalBagMenuComponent
  },
  {
    path: "aprobar-prorroga",
    component: ApprovalBagApprovalExtensionComponent
  },
  {
    path: "aprobacion-creacion",
    component: ApprovalCreateBagComponent
  },
];
