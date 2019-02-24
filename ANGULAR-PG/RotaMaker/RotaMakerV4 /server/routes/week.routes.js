const express = require('express');
const router = express.Router();

const weekController = require('../controllers/week.controller');



router.get('/', weekController.getWeeks);

router.post('/', weekController.createWeek);

router.get('/:id', weekController.getWeek);

router.put('/:id', weekController.updateWeek);

router.delete('/:id', weekController.deleteWeek);







module.exports = router;