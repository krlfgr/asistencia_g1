const express = require('express');
const router = express.Router();
const AttendanceController = require('../controllers/attendanceController');

router.post('/', AttendanceController.createAttendance);
router.get('/', AttendanceController.getAllAttendances);
router.get('/:user_id', AttendanceController.getAttendanceByUser);

module.exports = router;
