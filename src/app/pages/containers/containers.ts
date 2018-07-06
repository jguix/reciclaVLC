import { Component } from '@angular/core';
import { ContenedorTipo, ContainerService } from '@app/services';

@Component({
  selector: 'page-containers',
  templateUrl: 'containers.html'
})
export class ContainersPage {
  containerTypes: Array<ContenedorTipo>;

  constructor(private containerService: ContainerService) {
    this.containerTypes = this.containerService.getContainerTypes();
  }
}
