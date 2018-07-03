import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContenedorTipo } from '../../services';

@Component({
  selector: 'page-containers',
  templateUrl: 'containers.html'
})
export class ContainersPage {
  containerTypes: Array<ContenedorTipo> = [
    ContenedorTipo.ACEITE,
    ContenedorTipo.CARTON,
    ContenedorTipo.ENVASES,
    ContenedorTipo.ORGANICO,
    ContenedorTipo.PILAS,
    ContenedorTipo.PUNTO_VERDE,
    ContenedorTipo.RESIDUOS,
    ContenedorTipo.ROPA,
    ContenedorTipo.VIDRIO,
  ];

  constructor(public navCtrl: NavController) {

  }
}
