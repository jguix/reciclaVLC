import { Injectable } from "@angular/core";
import { ContenedorTipo } from "./contenedor-tipo.model";

@Injectable()
export class ContainerService {
    containerTypes: Array<ContenedorTipo> = [
        ContenedorTipo.ACEITE,
        ContenedorTipo.CARTON,
        ContenedorTipo.ENVASES,
        ContenedorTipo.ORGANICO,
        ContenedorTipo.PILAS,
        ContenedorTipo.PUNTO_VERDE,
        ContenedorTipo.RESIDUOS,
        ContenedorTipo.ROPA,
        ContenedorTipo.VIDRIO,
      ];

    getContainerTypes(): Array<ContenedorTipo> {
        return this.containerTypes;
    }
}