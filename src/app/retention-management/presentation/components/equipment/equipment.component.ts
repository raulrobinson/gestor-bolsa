import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retention-management-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  isMenu= false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.isMenu = false;
  }
}
