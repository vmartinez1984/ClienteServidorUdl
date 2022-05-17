const mongoose = require("mongoose");

peliculaModel = {
    nombre: String,
    director: String,
    distribuidora: String,
    anio: Number,
    sinopsis: String,
    url: String
}

peliculaEsquema = new mongoose.Schema(peliculaModel);

const pelicula = mongoose.model("pelicula", peliculaEsquema);

module.exports = pelicula;