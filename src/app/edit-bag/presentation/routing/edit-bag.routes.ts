import { Routes } from '@angular/router';
import { ExtensionRequestComponent as EditBagExtensionRequestComponent } from '../components/extension-request/extension-request.component';
import { MenuComponent as EditBagMenuComponent} from '../components/menu/menu.component';
import { EditBagComponent } from '../components/edit-bag/edit-bag.component';

export const EditBagRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: EditBagMenuComponent
  },
  {
    path: "solicitud-prorroga",
    component: EditBagExtensionRequestComponent
  },
  {
    path: "edicion-bolsa",
    component: EditBagComponent
  },
];
