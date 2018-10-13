let express = require('express');
let app = express();
let bodyParser = require('body-parser');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index1.html');
});


app.use(express.static('client'));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function(){
  console.log("conectado hijodeputa....")
});
