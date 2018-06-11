import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '../../../environments/environment';
import { AppCiudadService } from '../../services/app-ciudad.service';
import { ContenedorTipo } from '../../services/contenedor-tipo.model';
import { ContainersPage } from '../containers/containers';
import { MaterialsPage } from '../materials/materials';
import { AroundMePage } from '../around-me/around-me';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = 'reciclaVLC';
  environmentName = environment.envName;
  results: any;

  constructor(public navCtrl: NavController,
    private appCiudadService: AppCiudadService,
    private translate: TranslateService) {
    
    translate.setDefaultLang('ca');

    this.appCiudadService.contenedores('39471213', '-381494', ContenedorTipo.ROPA).subscribe((results) => {
      console.log('contenedores', results);
      this.results = results;
    });

  }

  goToMaterials() {
    this.navCtrl.push(MaterialsPage);
  }

  goToContainers() {
    this.navCtrl.push(ContainersPage);
  }

  goToAroundMe() {
    this.navCtrl.push(AroundMePage);
  }

}
