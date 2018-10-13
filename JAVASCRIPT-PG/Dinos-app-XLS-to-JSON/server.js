const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', function(request, response){
  response.sendFile(__dirname + '/client/index.html')
});

app.use(bodyParser.json());
app.use(express.static('client'));

app.listen(3000, function(){
  console.log("conectado cabronazo!!!!")
})
