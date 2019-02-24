const mongoose = require('mongoose');
const { Schema } = mongoose;

const WeekSchema = new Schema({
    weekNumber: { type: Number, required: true},
    daysInWeek:{type: Array, required: false},
    month: {type: String, required: false},
    year: {type: String, required: false}
    // isGenerated: {type: Boolean, required: false},
    // setupIsApplied: {type: Boolean, required: false},   
})
 
module.exports = mongoose.model('Week', WeekSchema);