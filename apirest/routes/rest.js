const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../services/db");
const peliculaRepository = require("../models/pelicula");
const { default: mongoose } = require("mongoose");

router.get("/api/peliculas", async (req, res)=>{
    //res.send("Hola mundo");
    try{
        list = await peliculaRepository.find();

        res.status(200).json(list)
    }catch(error){
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
});

router.post("/api/peliculas", async (request, response)=>{
    try{    
        const pelicula = request.body;
        const repository = new peliculaRepository({
            nombre : pelicula.nombre,     
            director: pelicula.director,
            distribuidora: pelicula.distribuidora,
            anio: pelicula.anio,
            sinopsis: pelicula.sinopsis,
            url: pelicula.url
        });
        const responseRepository = await repository.save();
        //console.log(responseRepository);
        response.status(200).json({ _id : responseRepository._id});
    }catch(error){
        console.log(error);
        reponse.status(500).json(error);
    }
})

router.put("/api/peliculas/:id", async(request, response)=>{
    try{    
        const id = request.params.id;
        const pelicula = request.body;
        //console.log(id);
        const peliculaEncontrada = await peliculaRepository.findOne({_id : mongoose.Types.ObjectId(id)});
        //console.log(peliculaEncontrada);
        if(!peliculaEncontrada)
            reponse.status(404);           
        const responseRepository = await peliculaRepository.findByIdAndUpdate(
            peliculaEncontrada._id, 
            pelicula,
            {userFindAndModify: false}
            );
        //console.log(responseRepository);
        //response.status(200);
        response.json({data: responseRepository});
    }catch(error){
        console.log(error);
        reponse.status(500).json(error);
    }
})

router.get("/api/peliculas/:id", async(request, response)=>{
    try{    
        const id = request.params.id;
        const pelicula = await peliculaRepository.findOne({_id : mongoose.Types.ObjectId(id)});
        //console.log(peliculaEncontrada);
        if(!pelicula)
            reponse.status(404);           
        
        response.json(pelicula);
    }catch(error){
        console.log(error);
        reponse.status(500).json(error);
    }
})

router.delete("/api/peliculas/:id", async(request, response)=>{
    try{    
        const id = request.params.id;
        const pelicula = await peliculaRepository.deleteOne({_id : mongoose.Types.ObjectId(id)});
        response.status(202).json(pelicula);
    }catch(error){
        console.log(error);
        reponse.status(500).json(error);
    }
})

module.exports = router;