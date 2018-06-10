import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppCiudadService } from '../../app/services/app-ciudad.service';

@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html'
})
export class MaterialsPage {

  constructor(public navCtrl: NavController,
    private appCiudadService: AppCiudadService) {

  }
}
