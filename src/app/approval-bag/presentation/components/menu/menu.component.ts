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
        name:"Aprobar prórroga",
        icon:"movistar-icon",
        route:"/aprobacion-bolsa/aprobar-prorroga"
      },
      // {
      //   nombre:"Aprobar bolsa",
      //   icono:"movistar-icon",
      //   ruta:"/gestion-captacion/captacion-mixta"
      // }
    ]
  }

}
