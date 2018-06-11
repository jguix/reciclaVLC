import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '../../../environments/environment';
import { AppCiudadService } from '../../services/app-ciudad.service';
import { ContenedorTipo } from '../../services/contenedor-tipo.model';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
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
