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
        nombre:"Solicitud de prórroga",
        icono:"movistar-icon",
        ruta:"/editar-bolsa/solicitud-prorroga"
      },
      {
        nombre:"Edición de bolsa",
        icono:"movistar-icon",
        ruta:"/editar-bolsa/edicion-bolsa"
      }
    ]
  }

}
