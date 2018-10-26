const express = require('express');
const app = express();

app.get('/', function(req, res){
res.sendFile(__dirname + '/client/index.html')
});

app.use(express.static('client'));


app.listen(3000, function(){
    console.log("conectado cabron")
})

