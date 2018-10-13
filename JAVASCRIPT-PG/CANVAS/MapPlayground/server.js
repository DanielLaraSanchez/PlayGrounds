// const express = require('express');
// const app = express();
// const path = require('path')
//
// // app.use(express.static(__dirname + './libraries'))
//
// // app.use('/', express.static(__dirname + 'libraries'));
//
// // app.get('/', function(req, res){
// //   res.sendFile(__dirname + '/index.html')
// // })
//
//
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/libraries/index.html'));
// });
//
// app.use(express.static('libraries'));
//
// app.listen(3000, function(){
//   console.log("functiona hijo de puta.........")
// });


var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
