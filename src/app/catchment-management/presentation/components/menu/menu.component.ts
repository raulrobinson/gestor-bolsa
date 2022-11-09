import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from '../../../../global/domain/models/MenuItemModel';

@Component({
  selector: 'app-catchment-management-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opciones!: MenuItemModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.opciones = [
      {
        name: "Gestion Captación Dinero",
        icon: "movistar-icon",
        route: "/gestion-captacion/captacion-dinero"
      },
      {
        name: "Gestion Captación Equipo",
        icon: "movistar-icon",
        route: "/gestion-captacion/captacion-equipo"
      },
      {
        name: "Gestion Captación Mixta",
        icon: "movistar-icon",
        route: "/gestion-captacion/captacion-mixta"
      }
    ]
  }

}
