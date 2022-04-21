export class Personaje {
    id:number;
    nombre: string;
    compania: string;
    imagen: string;

    constructor(id: number, nombre: string, compania: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.compania = compania;
        this.imagen = imagen;
    }
}