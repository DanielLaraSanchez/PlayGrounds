const mongoose = require('mongoose');

const URI = 'mongodb://localhost/database'

mongoose.connect(URI, { useNewUrlParser: true })
.then(function(db){
    console.log('connected to mongoDB')
})
.catch(function(err){
    console.error(err)
})


module.exports = mongoose;