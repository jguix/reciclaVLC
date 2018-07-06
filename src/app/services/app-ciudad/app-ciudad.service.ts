import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppCiudadRemote } from './app-ciudad.remote';
import { Contenedor } from './contenedor.model';
import { CDMResult } from './cdm.model';
import { ContenedorTipo } from '@app/services';

@Injectable()
export class AppCiudadService {

    constructor(private remote: AppCiudadRemote) {
    }

    // aparcamientos(lat: string, lon: string): Observable<any> {
    // }

    // valenbisiDisponibles(lat: string, lon: string): Observable<any> {
    // }

    // valenbisiLibres(lat: string, lon: string): Observable<any> {
    // }

    // taxis(lat: string, lon: string): Observable<any> {
    // }

    contenedores(lat: string, lon: string, tipo: ContenedorTipo): Observable<Array<Contenedor>> {
        return this.remote.contenedores(lat, lon, tipo)
        .map((results: Array<CDMResult>) => {
            let contenedores: Array<Contenedor> = [];
            results.forEach(result => {
                contenedores.push(this.getContenedor(result, tipo));
            });
            return contenedores;
        });
    }

    getContenedor(cdmResult: CDMResult, tipo: ContenedorTipo): Contenedor {
        let contenedor = {
            lat: cdmResult.latDestino,
            lon: cdmResult.lonDestino,
            distancia: cdmResult.distancia,
            direccion: cdmResult.mensaje.split(/\n/)[0],
            tipo: tipo,
            subtipo: cdmResult.mensaje.split(/\n/)[1]
        };
        return contenedor;
    }

    // wifi(lat: string, lon: string): Observable<any> {
    // }
}
