const signalhub = require('signalhub');
const swarm = require('webrtc-swarm');
const hub = signalhub('my-game', [
    'http://localhost:8080'
]);

hub.subscribe('update').on('data', function(data){
    console.log(data)

})

setInterval(function (){
    hub.broadcast('update', window.location.hash)
}, 1000)