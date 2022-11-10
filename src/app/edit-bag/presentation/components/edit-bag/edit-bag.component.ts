import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bag',
  templateUrl: './edit-bag.component.html',
  styleUrls: ['./edit-bag.component.scss']
})
export class EditBagComponent implements OnInit {
  isMenu= false;

  constructor() { }

  ngOnInit(): void {
  }


  showMenu() {
    this.isMenu = false;
  }
}
