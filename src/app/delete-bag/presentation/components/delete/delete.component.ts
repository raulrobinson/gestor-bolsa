import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  isDeleteMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    this.isDeleteMenu = false;
  }
}
