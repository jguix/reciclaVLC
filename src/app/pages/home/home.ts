import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { AppCiudadService, ContenedorTipo } from '../../services';
import { ContainersPage } from '../containers';
import { MaterialsPage } from '../materials';
import { AroundMePage } from '../around-me';

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
