import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppCiudadService } from '../../services/app-ciudad.service';

@Component({
  selector: 'page-around-me',
  templateUrl: 'around-me.html'
})
export class AroundMePage {

  constructor(public navCtrl: NavController,
    private appCiudadService: AppCiudadService) {

  }
}
