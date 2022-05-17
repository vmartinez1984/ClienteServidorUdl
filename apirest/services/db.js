const mongoose = require("mongoose");

const urlConexion = "mongodb+srv://vmartinez:macross2012@cluster0.vao54.mongodb.net/mis_peliculas?retryWrites=true&w=majority";

mongoose.connect(urlConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.log.bind(console, "Error de conexion"));
db.on("Conected", console.log.bind(console, "Conexión exitosa"));

module.exports = db;