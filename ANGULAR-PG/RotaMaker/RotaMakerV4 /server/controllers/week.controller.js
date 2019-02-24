const Week = require('../models/week.model');

const weekController = {}

weekController.getWeeks = async function(req, res){
    const weeks = await Week.find();
    res.json(weeks);
}

weekController.getWeek = async function(req, res){
    const week = await Week.findById(req.params.id);   
     res.json(week);
}

weekController.createWeek = async function(req, res){
    const week = new Week({
        weekNumber: req.body.weekNumber,
        daysInWeek: req.body.daysInWeek,
        month: req.body.month,
        year: req.body.year
    })

    await week.save();
    res.json({
        status: 'Week Saved'
    });
}

weekController.deleteWeek = async function(req, res){
    await Week.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Week Deleted'
    })
}


weekController.updateWeek = async function(req, res){
    const week = {
        weekNumber: req.body.weekNumber,
        daysInWeek: req.body.daysInWeek,
        month: req.body.month,
        year: req.body.year
    }
     await Week.findByIdAndUpdate(req.params.id, {$set: week}, {new:  true});
     res.json({
         status: 'Week Updated'
     })
}

module.exports = weekController;