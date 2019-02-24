const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShiftSchema = new Schema({
    workersRequired: { type: Number, required: true},
    hours:{type: Number, required: false},
    timeStart:{type: String, required: false},
    timeFinish:{type: String, required: false},
    arrayOfWorkers: {type: Array, required: false},
    day: {type: String, required: false},
    fullyBooked: {type: Boolean, required: false},
    role: {type: String, require: false}

    
})
 
module.exports = mongoose.model('Shift', ShiftSchema);


