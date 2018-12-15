const express = require('express');
const app = express();



app.use(express.static('client'))


app.use('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
})



app.listen(3000, function(){
    console.log("listening.....")
})