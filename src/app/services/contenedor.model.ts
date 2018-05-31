export interface Contenedor {
    lat: number;
    lon: number;
    distancia: number;
    direccion: string;
    tipo: ContenedorTipo;
    subtipo: string;
}

export enum ContenedorTipo {
    PILAS = 'pilas',
    ACEITE = 'aceite',
    ROPA = 'ropa',
    RESIDUOS = 'residuos',
    ENVASES = 'envases',
    CARTON = 'carton',
    VIDRIO = 'vidrio',
    ORGANICO = 'organico'
}
