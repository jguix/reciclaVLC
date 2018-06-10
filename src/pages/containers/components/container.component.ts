import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'container',
  templateUrl: 'Container.component.html',

})
export class ContainerComponent {
  @Input() name: string;

  constructor(public navCtrl: NavController) {

  }

  goToContainerPage(pageName: string): void {
    console.log('Should navigate to ' + pageName);
  }
}
