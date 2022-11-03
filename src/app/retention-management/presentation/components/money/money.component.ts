import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {
  isMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.isMenu = false;
  }
}
