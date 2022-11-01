import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})

export class SidenavComponent implements OnInit {

  opcionesMenu!: SideNavItemModel[];

  constructor() {
    this.opcionesMenu=[
      {
        isActive:false,
        icon:"M12 4.5v15m7.5-7.5h-15",
        label: "Completo"
      }
    ]
  }

  ngOnInit(): void {
  }

}

interface SideNavItemModel {

  label: string,
  icon: string,
  isActive: boolean;

}
