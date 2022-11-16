import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from '../../../domain/models/MenuItemModel';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})

export class SidenavComponent implements OnInit {

  opcionesMenu!: MenuItemModel[];

  constructor() {
    this.opcionesMenu = [
      {
        icon: "agregar-icon",
        name: "Creación De Bolsa",
        route: "/crear-bolsa",
        isActive: false
      },
      {
        icon: "portapapeles-icon",
        name: "Gestión Captación",
        route: "/gestion-captacion",
        isActive: false
      },
      {
        icon: "escudo-icon",
        name: "Gestión Retención",
        route: "/gestion-retencion",
        isActive: false
      },
      {
        icon: "editar-icon",
        name: "Edición Bolsas",
        route: "/editar-bolsa",
        isActive: false
      },
      {
        icon: "eliminar-icon",
        name: "Eliminar Bolsas",
        route: "/eliminar-bolsa",
        isActive: false
      },
      {
        icon: "aprobacion-icon",
        name: "Aprobacion Bolsas",
        route: "/aprobacion-bolsa",
        isActive: false
      },
      {
        icon: "reportes-icon",
        name: "Consultas Y Reportes",
        route: "/consulta-reportes"
      }
    ]
  }

  activeOption(item: MenuItemModel) {
    this.opcionesMenu.forEach(it => it.isActive = false);
    item.isActive = true;
  }

  ngOnInit(): void {
  }

}

