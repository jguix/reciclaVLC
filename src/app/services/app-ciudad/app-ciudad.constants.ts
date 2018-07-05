import { Injectable } from '@angular/core';

@Injectable()
export class AppCiudadConstants {
    static BASE_URL = 'http://mapas.valencia.es/lanzadera';
    static PATH_APARCAMIENTOS = 'gps/aparcamientos';
    static PATH_VALENBISI_DISPONIBLES = 'gps/valenbisi/disponibles';
    static PATH_VALENBISI_LIBRES = 'gps/valenbisi/libres';
    static PATH_TAXIS = 'gps/taxis';
    static PATH_CONTENEDORES = 'gps/contenedores';
    static PATH_WIFI = 'gps/wifi';
    static PATH_TRAFICO = 'gps/trafico';
    static HEADER_AUTH_BASIC = 'Basic';
}

export const environment = {
    production: false,
    envName: 'dev',
    apiKey: 'mimacom',
    apiSecret: 'AMVjpbWF'
  };
  