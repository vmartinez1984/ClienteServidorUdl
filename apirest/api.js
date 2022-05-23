const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

const port = process.env.PORT || 4000;

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require("./routes/rest"));

//iniciar el server
app.listen(port, () => {
    console.log("Servidor iniciando puerto en " + port);
});

/*
eric.sanchez@udlondres.com
Enviar reporte de la aplicación

https://www.heroku.com/
*/