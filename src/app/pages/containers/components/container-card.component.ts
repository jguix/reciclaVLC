import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContenedorTipo } from '@app/services';
import { ContainerPage } from '@app/pages/container/container';

@Component({
  selector: 'container-card',
  templateUrl: 'container-card.component.html'
})
export class ContainerCardComponent {
  @Input() type: ContenedorTipo;

  constructor(public navCtrl: NavController) {
  }

  goToContainerPage(): void {
    this.navCtrl.push(ContainerPage, { type: this.type });
  }
}
