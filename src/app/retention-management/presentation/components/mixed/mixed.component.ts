import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mixed',
  templateUrl: './mixed.component.html',
  styleUrls: ['./mixed.component.scss']
})
export class MixedComponent implements OnInit {
  isMenu = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  showMenu() {
    this.isMenu = false;
  }

}
