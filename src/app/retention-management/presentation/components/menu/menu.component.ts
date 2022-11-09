import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from "../../../../global/domain/models/MenuItemModel";

@Component({
  selector: 'app-retention-management-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  options!: MenuItemModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.menu();
  }

  private menu() {
    this.options = [
      {
        name: "Gestion Retención Dinero",
        icon: "movistar-icon",
        route: "retencion-dinero"
      },
      {
        name: "Gestion Retención Equipo",
        icon: "movistar-icon",
        route: "retencion-equipo"
      },
      {
        name: "Gestion Retención Mixta",
        icon: "movistar-icon",
        route: "retencion-mixta"
      },
      {
        name: "Gestion Retención Masiva",
        icon: "movistar-icon",
        route: "retencion-masiva"
      }
    ]
  }
}
