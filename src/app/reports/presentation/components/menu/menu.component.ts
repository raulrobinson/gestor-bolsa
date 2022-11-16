import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from "../../../../global/domain/models/MenuItemModel";

@Component({
  selector: 'app-menu-report-consult-bag',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItemModels!: MenuItemModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.menuItemModels = [
      {
        name: "Reporte General",
        icon: "movistar-icon",
        route: "reporte-general"
      },
      {
        name: "Reporte Despachos",
        icon: "movistar-icon",
        route: "reporte-despachos"
      },
      {
        name: "Consulta Para Analista",
        icon: "movistar-icon",
        route: "consulta-por-analista"
      }
    ]
  }

}
