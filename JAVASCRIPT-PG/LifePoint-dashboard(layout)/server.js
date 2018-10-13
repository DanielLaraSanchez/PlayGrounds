const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
})

app.use(express.static('client'));
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log("estas Conectado maldito cabron")
})
