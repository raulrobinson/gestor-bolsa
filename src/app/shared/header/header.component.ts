import { Component, OnInit } from '@angular/core';
import HistoricalModel from '../models/historical.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  historical!: HistoricalModel[];
  constructor() {
    this.historical=[
      {
        indexPath: 0,
        path: "Menú Gestor Bolsas",
        isActive: false
      },
      {
        indexPath: 1,
        path: "Creación De Bolsa",
        isActive: false
      },
      {
        indexPath: 2,
        path: "Bolsa Dinero",
        isActive:true
      }
    ]

  }
  changePath(goingToPath: string): void {


    let indexFounded: number = this.historical.findIndex(element => element.path === goingToPath);

    if (indexFounded === -1) {
      this.historical.push({
        indexPath: 0,
        path: goingToPath,
        isActive: true
      })
    } else {
      this.historical = this.historical.filter((hm, index) => {
        if (index <= indexFounded) {
          return true;
        }
        return false;
      })
      this.historical[indexFounded].isActive=true;
    }
  }

  ngOnInit(): void {

  }

}
