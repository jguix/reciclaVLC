import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '../../environments/environment';
import { AppCiudadService } from '../../app/services/app-ciudad.service';
import { ContenedorTipo } from '../../app/services/contenedor.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = 'reciclaVLC';
  environmentName = environment.envName;
  results: any;

  constructor(public navCtrl: NavController,
    private appCiudadService: AppCiudadService) {
    
    this.appCiudadService.contenedores('39471213', '-381494', ContenedorTipo.ROPA).subscribe((results) => {
      console.log('contenedores', results);
      this.results = results;
    });

  }
}
