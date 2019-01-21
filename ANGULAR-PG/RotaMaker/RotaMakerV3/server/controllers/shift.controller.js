const Shift = require('../models/shift.model');

const shiftController = {}

shiftController.getShifts = async function(req, res){
    const shifts = await Shift.find();
    res.json(shifts);
}

shiftController.getShift = async function(req, res){
    const shift = await Shift.findById(req.params.id);   
     res.json(shift);
}

shiftController.createShift = async function(req, res){
    const shift = new Shift({
        workersRequired: req.body.workersRequired,
        hours: req.body.hours,
        arrayOfWorkers: req.body.arrayOfWorkers,
        day: req.body.day,
        fullyBooked: req.body.fullyBooked
    })

    await shift.save();
    res.json({
        status: 'Shift Saved'
    });
}

shiftController.deleteShift = async function(req, res){
    await Shift.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Shift Deleted'
    })
}


shiftController.updateShift = async function(req, res){
    const shift = {
        workersRequired: req.body.workersRequired,
        hours: req.body.hours,
        arrayOfWorkers: req.body.arrayOfWorkers,
        day: req.body.day,
        fullyBooked: req.body.fullyBooked
    }
     await Shift.findByIdAndUpdate(req.params.id, {$set: shift}, {new:  true});
     res.json({
         status: 'Shift Updated'
     })
}

module.exports = shiftController;