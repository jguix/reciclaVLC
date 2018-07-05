import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppCiudadConstants } from './app-ciudad.constants';
import { environment } from '@env/environment';

@Injectable()
export class AppCiudadRemote {
    private credentials = this.getBase64EncodedCredentials();

    constructor(private http: HttpClient) {
    }

    aparcamientos(lat: string, lon: string): Observable<any> {
        const headers = this.getAuthHeaders();
        return this.http.get(`${AppCiudadConstants.BASE_URL}/${AppCiudadConstants.PATH_APARCAMIENTOS}/${lat}/${lon}`, { headers: headers });
    }

    valenbisiDisponibles(lat: string, lon: string): Observable<any> {
        const headers = this.getAuthHeaders();
        return this.http.get(`${AppCiudadConstants.BASE_URL}/${AppCiudadConstants.PATH_VALENBISI_DISPONIBLES}/${lat}/${lon}`, { headers: headers });
    }

    valenbisiLibres(lat: string, lon: string): Observable<any> {
        const headers = this.getAuthHeaders();
        return this.http.get(`${AppCiudadConstants.BASE_URL}/${AppCiudadConstants.PATH_VALENBISI_LIBRES}/${lat}/${lon}`, { headers: headers });
    }

    taxis(lat: string, lon: string): Observable<any> {
        const headers = this.getAuthHeaders();
        return this.http.get(`${AppCiudadConstants.BASE_URL}/${AppCiudadConstants.PATH_TAXIS}/${lat}/${lon}`, { headers: headers });
    }

    contenedores(lat: string, lon: string, tipo: string): Observable<any> {
        const headers = this.getAuthHeaders();
        return this.http.get(`${AppCiudadConstants.BASE_URL}/${AppCiudadConstants.PATH_CONTENEDORES}/${tipo}/${lat}/${lon}`, { headers: headers });
    }

    wifi(lat: string, lon: string): Observable<any> {
        const headers = this.getAuthHeaders();
        return this.http.get(`${AppCiudadConstants.BASE_URL}/${AppCiudadConstants.PATH_WIFI}/${lat}/${lon}`, { headers: headers });
    }

    private getAuthHeaders() {
        return new HttpHeaders({
            'Authorization': `${AppCiudadConstants.HEADER_AUTH_BASIC} ${this.credentials}`
        });
    }

    private getBase64EncodedCredentials() {
        const credentials = 
            `${encodeURIComponent(environment.apiKey)}:${encodeURIComponent(environment.apiSecret)}`;
        return btoa(credentials);
    }
}
