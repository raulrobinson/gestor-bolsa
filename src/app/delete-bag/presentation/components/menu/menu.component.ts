import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from "../../../../global/domain/models/MenuItemModel";

@Component({
  selector: 'app-menu',
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
        name: "Eliminar Bolsa",
        icon: "movistar-icon",
        route: "eliminar-bolsa"
      },
      {
        name:"Eliminar Registros Bolsa",
        icon:"movistar-icon",
        route :""
      }
    ]
  }

}
