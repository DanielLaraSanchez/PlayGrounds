const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: { type: String, required: true},
    position:{type: String, required: false},
    hpw: {type: Number, required: false},
    salary: {type: Number, required: false},
    fullyBooked: {type: Boolean, required: false},
    shiftsWorked: {type: Array, required: false},
    colleagues: {type: Array, required: false},
    hworked: {type: Number, required: false}

    
})

module.exports = mongoose.model('Employee', EmployeeSchema);

