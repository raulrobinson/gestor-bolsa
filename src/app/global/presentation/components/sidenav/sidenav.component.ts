import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../../domain/models/MenuItemModel';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})

export class SidenavComponent implements OnInit {

  opcionesMenu!: MenuItemModel[];

  constructor() {
    this.opcionesMenu=[
      {
        icon:"agregar-icon",
        name:"Creación De Bolsa",
        route:"/crear-bolsa"
      },
      {
        icon:"portapapeles-icon",
        name:"Gestión Captación",
        route:"/gestion-captacion"
      },
      {
        icon:"escudo-icon",
        name:"Gestión Retención",
        route:"/gestion-retencion"
      },
      {
        icon:"editar-icon",
        name:"Edición Bolsas",
        route:"/editar-bolsa"
      },
      {
        icon:"aprobacion-icon",
        name:"Aprobacion Bolsas",
        route:"/aprobacion-bolsa"
      },
      // {
      //   icono:"eliminar-icon",
      //   nombre:"Edición Bolsas",
      //   ruta:"/editar-bolsa"
      // },
      // {
      //   icono:"reportes-icon",
      //   nombre:"Edición Bolsas",
      //   ruta:"/editar-bolsa"
      // }

    ]
  }

  ngOnInit(): void {
  }

}

