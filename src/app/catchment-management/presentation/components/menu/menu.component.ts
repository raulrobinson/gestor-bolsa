import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../../../global/domain/models/MenuItemModel';

@Component({
  selector: 'app-catchment-management-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opciones!:MenuItemModel[];

  constructor() { }

  ngOnInit(): void {
    this.opciones=[
      {
        nombre:"Gestion Captación Dinero",
        icono:"movistar-icon",
        ruta:"/gestion-captacion/captacion-dinero"
      },
      {
        nombre:"Gestion Captación Equipo",
        icono:"movistar-icon",
        ruta:"/gestion-captacion/captacion-equipo"
      }
    ]
  }

}
