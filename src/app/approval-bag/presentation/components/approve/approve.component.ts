import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {
  isMenu = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  showMenu() {
    this.isMenu = false;
  }

}
