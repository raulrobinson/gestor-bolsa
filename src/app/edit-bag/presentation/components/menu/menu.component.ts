import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from 'src/app/global/domain/models/MenuItemModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opciones!:MenuItemModel[];

  constructor() { }

  ngOnInit(): void {
    this.opciones=[
      {
        name:"Solicitud de prórroga",
        icon:"movistar-icon",
        route:"/editar-bolsa/solicitud-prorroga"
      },
      {
        name:"Edición de bolsa",
        icon:"movistar-icon",
        route:"/editar-bolsa/edicion-bolsa"
      }
    ]
  }

}
