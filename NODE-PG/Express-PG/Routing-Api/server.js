const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

let logger = function(req, res, next){
    console.log('Loggin...');
    next();
}

app.use(logger);

app.get('/', function(req, res){
    res.send('Hello Dani')
})


app.listen(3000, function(){
    console.log('estas conectado ....')
})