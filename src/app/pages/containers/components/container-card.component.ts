import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'container-card',
  templateUrl: 'container-card.component.html'
})
export class ContainerCardComponent {
  @Input() type: string;

  constructor(public navCtrl: NavController) {

  }

  goToContainerPage(pageName: string): void {
    console.log('Should navigate to ' + pageName);
  }
}
