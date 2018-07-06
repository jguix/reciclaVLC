import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MaterialPage } from '@app/pages/material/material';

@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html'
})
export class MaterialsPage {

  constructor(public navCtrl: NavController) {
  }

  goToMaterial(material: string) {
    this.navCtrl.push(MaterialPage, { material: material });
  }
}
