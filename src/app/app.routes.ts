import { Routes } from '@angular/router';

export const AppRoutes: Routes = [

  {
    path: "crear-bolsa",
    loadChildren: () => import('./create-bag/create-bag.module').then(m => m.CreateBagModule)
  },
  {
    path: "editar-bolsa",
    loadChildren: () => import('./edit-bag/edit-bag.module').then(m => m.EditBagModule)
  },
  {
    path: "gestion-captacion",
    loadChildren: () => import('./catchment-management/catchment-management.module').then(m => m.CatchmentManagementModule)
  },
  {
    path: "gestion-retencion",
    loadChildren: () => import('./retention-management/retention-management.module').then(m => m.RetentionManagementModule)
  },
  {
    path: "aprobacion-bolsa",
    loadChildren: () => import('./approval-bag/approval-bag.module').then(m => m.ApprovalBagModule)
  },
  {
    path: "",
    loadChildren: () => import('./global/global.module').then(m => m.GlobalModule)
  }
];
