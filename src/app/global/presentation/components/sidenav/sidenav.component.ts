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
        icono:"agregar-icon",
        nombre:"Creación De Bolsa",
        ruta:"/crear-bolsa"
      },
      {
        icono:"portapapeles-icon",
        nombre:"Gestión Captación",
        ruta:"/gestion-captacion"
      },
      {
        icono:"escudo-icon",
        nombre:"Gestión Retención",
        ruta:"/gestion-retencion"
      },
      {
        icono:"editar-icon",
        nombre:"Edición Bolsas",
        ruta:"/editar-bolsa"
      },
      {
        icono:"aprobacion-icon",
        nombre:"Aprobacion Bolsas",
        ruta:"/aprobacion-bolsa"
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

