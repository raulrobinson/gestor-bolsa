import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule} from '@angular/router';
import { AppRoutes } from './app.routes';



export const routerOptions: ExtraOptions = {
  initialNavigation: 'enabledNonBlocking', //'disabled' | 'enabled' | 'enabledBlocking' | 'enabledNonBlocking'
}

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
