'use strict';

const express = require('express');
const BodyParser = require('body-parser');
const app = express();

const usuario = require('./routes/usuario');
const projeto = require('./routes/projeto');
const status = require('./routes/status');
const estacao = require('./routes/estacao');
const atividade = require('./routes/atividade');
const cidade = require('./routes/cidade');
const estado = require('./routes/estado');

let port = 3000;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res){
    res.send('Alright here.');
});

app.use(usuario);
app.use(projeto);
app.use(status);
app.use(estacao);
app.use(atividade);
app.use(cidade);
app.use(estado);

app.listen(port, function(err){
    if(!err){
        console.log(`App running at: http://localhost:${port}/`);
    }else{
        console.log(err);
    }
});