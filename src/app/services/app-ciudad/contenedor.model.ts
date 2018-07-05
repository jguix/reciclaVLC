import { ContenedorTipo } from './contenedor-tipo.model';

export interface Contenedor {
    lat: number;
    lon: number;
    distancia: number;
    direccion: string;
    tipo: ContenedorTipo;
    subtipo: string;
}
