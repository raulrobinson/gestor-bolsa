import { Component, OnInit } from '@angular/core';
import SideNavItemMenu from './models/SideNavItemMenu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  items: SideNavItemMenu[];
  constructor() {
    this.items= [];
    this.items.push(
      {
        label:"crear bolsa",
        icon:"bi bi-home2",
        path:"/crear-bolsa"
      }
    );
  }

  ngOnInit(): void {

  }

}
