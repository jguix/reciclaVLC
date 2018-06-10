import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppCiudadService } from '../../app/services/app-ciudad.service';

@Component({
  selector: 'page-containers',
  templateUrl: 'containers.html'
})
export class ContainersPage {

  constructor(public navCtrl: NavController,
    private appCiudadService: AppCiudadService) {

  }
}
