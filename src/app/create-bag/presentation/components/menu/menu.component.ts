import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../../../global/domain/models/MenuItemModel';

@Component({
  selector: 'app-create-bag-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  options!:MenuItemModel[];

  constructor() { }

  ngOnInit(): void {
    this.options=[
      {
        name:"Bolsa De Dinero",
        icon:"movistar-icon",
        route:"/crear-bolsa/bolsa-dinero"
      },
      {
        name:"Bolsa De Equipos",
        icon:"movistar-icon",
        route:"/crear-bolsa/bolsa-equipo"
      },
      {
        name:"Bolsa Mixta",
        icon:"movistar-icon",
        route:"/crear-bolsa/bolsa-mixta"
      }
    ]
  }

}
