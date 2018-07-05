import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContenedorTipo } from '@app/services';

@Component({
  selector: 'container-card',
  templateUrl: 'container-card.component.html'
})
export class ContainerCardComponent {
  @Input() type: ContenedorTipo;

  constructor(public navCtrl: NavController) {

  }

  goToContainerPage(pageName: string): void {
    console.log('Should navigate to ' + pageName);
  }
}
