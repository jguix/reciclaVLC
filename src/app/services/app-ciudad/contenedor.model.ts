import { ContenedorTipo } from "@app/services/container";

export interface Contenedor {
    lat: number;
    lon: number;
    distancia: number;
    direccion: string;
    tipo: ContenedorTipo;
    subtipo: string;
}
