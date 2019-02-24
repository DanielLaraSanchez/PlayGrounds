const express = require('express');
const router = express.Router();

const shiftController = require('../controllers/shift.controller');



router.get('/', shiftController.getShifts);

router.post('/', shiftController.createShift);

router.get('/:id', shiftController.getShift);

router.put('/:id', shiftController.updateShift);

router.delete('/:id', shiftController.deleteShift);







module.exports = router;