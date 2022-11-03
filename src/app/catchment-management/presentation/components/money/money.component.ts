import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catchment-management-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {
  isMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.isMenu = false;
  }
}
