const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoleSchema = new Schema({
    role: { type: String, required: true},


    
})
 
module.exports = mongoose.model('Role', RoleSchema);