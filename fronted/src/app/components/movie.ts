export class Movie{
    _id : string;
    nombre: string;
    director: string;
    distribuidora: String;
    anio: Number;
    sinopsis: String;    

    constructor(
        _id: string,
        nombre: string,
        director: string,
        distribuidora: string,
        anio: Number,
        sinopsis: String        
    ){
        this._id = _id;
        this.nombre = nombre;
        this.director = director;
        this.distribuidora = distribuidora;
        this.anio = anio;
        this.sinopsis = sinopsis;        
    }
}