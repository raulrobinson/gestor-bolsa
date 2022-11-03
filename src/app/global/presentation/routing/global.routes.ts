import { Routes } from '@angular/router';
import { NotFoundComponent as GlobalNotFoundComponent} from '../components/not-found/not-found.component';
import { WelcomeComponent as GlobalWecomeComponent} from '../components/welcome/welcome.component';
import { ForbiddenComponent as GlobalForbiddenComponent} from '../components/forbidden/forbidden.component';

export const GlobalRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo:"welcome"
  },
  {
    path: "welcome",
    component: GlobalWecomeComponent
  },
  {
    path: "forbidden",
    component: GlobalForbiddenComponent
  },
  {
    path:"**",
    redirectTo:"notfound"
  },
  {
    path: "notfound",
    component: GlobalNotFoundComponent
  }

];
