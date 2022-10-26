import { Component, Input, OnInit } from '@angular/core';
import SideNavItemMenu from '../models/SideNavItemMenu';

@Component({
  selector: 'app-sidenav-item-menu',
  templateUrl: './sidenav-item-menu.component.html',
  styleUrls: ['./sidenav-item-menu.component.scss']
})
export class SidenavItemMenuComponent implements OnInit {

  @Input() itemMenu!: SideNavItemMenu;

  constructor() {

  }

  ngOnInit(): void {
  }

}
