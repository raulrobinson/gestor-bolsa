import { Component, Input, OnInit } from '@angular/core';
import { IconNamesEnum } from '../../../domain/models/IconNamesEnum';

@Component({
  standalone: true,
  selector: 'app-svg-importer',
  templateUrl: './svg-importer.component.html',
})
export class SvgImporterComponent implements OnInit {

  @Input()
  classes= "";

  agregarIcon:boolean=false;
  portapapelesIcon:boolean=false;
  escudoIcon:boolean=false;
  editarIcon:boolean=false;
  eliminarIcon:boolean=false;
  aprobacionIcon:boolean=false;
  reportesIcon:boolean=false;
  movistarIcon:boolean=false;
  menuIcon:boolean=false;
  closeIcon:boolean=false;

  defaultIcon:boolean=false;

  @Input()
  iconName:string="";

  constructor() {
  }

  ngOnInit(): void {

    if (this.iconName===IconNamesEnum.AGREGAR_ICON) {
      this.agregarIcon=true;
    } else {
      this.agregarIcon=false;
    }

    if (this.iconName===IconNamesEnum.PORTAPAPELES_ICON) {
      this.portapapelesIcon=true;
    } else {
      this.portapapelesIcon=false;
    }

    if (this.iconName===IconNamesEnum.ESCUDO_ICON) {
      this.escudoIcon=true;
    } else {
      this.escudoIcon=false;
    }

    if (this.iconName===IconNamesEnum.EDITAR_ICON) {
      this.editarIcon=true;
    } else {
      this.editarIcon=false;
    }

    if (this.iconName===IconNamesEnum.ELIMINAR_ICON) {
      this.eliminarIcon=true;
    } else {
      this.eliminarIcon=false;
    }

    if (this.iconName===IconNamesEnum.APROBACION_ICON) {
      this.aprobacionIcon=true;
    } else {
      this.aprobacionIcon=false;
    }

    if (this.iconName===IconNamesEnum.REPORTES_ICON) {
      this.reportesIcon=true;
    } else {
      this.reportesIcon=false;
    }

    if (this.iconName===IconNamesEnum.MOVISTAR_ICON) {
      this.movistarIcon=true;
    } else {
      this.movistarIcon=false;
    }

    if (this.iconName===IconNamesEnum.MENU_ICON) {
      this.menuIcon=true;
    } else {
      this.menuIcon=false;
    }

    if (this.iconName===IconNamesEnum.CLOSE_ICON) {
      this.closeIcon=true;
    } else {
      this.closeIcon=false;
    }







    if (this.iconName===IconNamesEnum.DEFAULT_ICON) {
      this.defaultIcon=true;
    } else {
      this.defaultIcon=false;
    }

  }

}
