var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expresstest')
       var cliente = require("../models/cliente.js");


describe('Model Test Clientes', function(){

    describe('Operaciones con Clientes', function(){
        it('Crear un nuevo alumno en la BD', function(done){
          var c = new cliente({nombre: "Jorge", dni: 039});
          c.save(done);
        });
    });
});
