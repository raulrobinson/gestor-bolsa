import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from '../../../../global/domain/models/MenuItemModel';

@Component({
  selector: 'app-approval-bag-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opciones!:MenuItemModel[];

  constructor() { }

  ngOnInit(): void {
    this.opciones=[
      {
        name:"Aprobación Creación",
        icon:"movistar-icon",
        route:"/aprobacion-bolsa/aprobacion-creacion"
      },
      {
        name:"Aprobación prórroga",
        icon:"movistar-icon",
        route:"/aprobacion-bolsa/aprobar-prorroga"
      }
    ]
  }

}
