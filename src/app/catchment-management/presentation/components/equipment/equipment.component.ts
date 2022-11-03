import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-catchment-management-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  isMenu = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  showMenu() {
    this.isMenu = false;
  }
}
