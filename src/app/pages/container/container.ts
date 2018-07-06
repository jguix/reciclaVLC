import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ContenedorTipo } from '@app/services';

@Component({
  selector: 'page-container',
  templateUrl: 'container.html'
})
export class ContainerPage {
  type: ContenedorTipo;
  
  constructor(public navParams: NavParams) {
    this.type = this.navParams.get('type');
  }
}
