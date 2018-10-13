let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server)
let bodyParser = require('body-parser')



 let users = [];
 let connections = [];
 //Connect
 io.sockets.on('connection', function(socket){
   connections.push(socket);
   console.log('Connected: %s sockets connected', connections.length);

 //Disconnect
 socket.on('disconnect', function(data){

   users.splice(users.indexOf(socket.username), 1);
   updateUsernames();
   connections.splice(connections.indexOf(socket), 1);
   console.log('Disconnected: %s sockets connected', connections.length);
 })

 //Send message
 socket.on('send message', function(data){
   console.log(data)
  io.sockets.emit('new message', {msg:data, user: socket.username});
})

//new user
socket.on('new user', function(data,callback){
  callback(true);
  console.log(callback(true))
  socket.username = data;
  users.push(socket.username);
  updateUsernames();
})

function updateUsernames(){
  io.sockets.emit('get users', users);
}
});










server.listen(process.env.PORT || 3000);
console.log('Server running HIJOPUTA........')

app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
})
