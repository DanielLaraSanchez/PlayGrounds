let express = require('express');
let app = express();
let server = require('http').createServer(app);
// let io = require('socket.io').listen(server)
let bodyParser = require('body-parser')





server.listen(process.env.PORT || 3000);
console.log('Server running HIJOPUTA........')

app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + './index.html');
})
