import {Routes} from "@angular/router";
import {DeleteComponent as DeleteBagComponent} from "../components/delete/delete.component";
import {MenuComponent as DeleteBagMenuComponent} from "../components/menu/menu.component";

export const DeleteBagRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    component: DeleteBagMenuComponent
  },
  {
    path: "eliminar-bolsa",
    component: DeleteBagComponent
  }
]
