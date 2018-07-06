import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MaterialPage } from '@app/pages/material/material';
import { MaterialService } from '@app/services';

@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html'
})
export class MaterialsPage {
  materials: Array<string>;

  constructor(public navCtrl: NavController,
    private materialService: MaterialService) {
      this.materials = this.materialService.getMaterials();
  }

  goToMaterial(material: string) {
    this.navCtrl.push(MaterialPage, { material: material });
  }
}
