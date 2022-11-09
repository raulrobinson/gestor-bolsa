import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../../../global/domain/models/MenuItemModel';

@Component({
  selector: 'app-create-bag-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  opciones!:MenuItemModel[];

  constructor() { }

  ngOnInit(): void {
    this.opciones=[
      {
        nombre:"Bolsa De Equipo",
        icono:"movistar-icon",
        ruta:"/crear-bolsa/bolsa-equipo"
      },
      {
        nombre:"Bolsa Mixta",
        icono:"movistar-icon",
        ruta:"/crear-bolsa/bolsa-mixta"
      },
      {
        nombre:"Bolsa De Dinero",
        icono:"movistar-icon",
        ruta:"/crear-bolsa/bolsa-dinero"
      }
    ]
  }

}
