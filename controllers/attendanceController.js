const Attendance = require('../models/attendance');


exports.createAttendance = async (req, res) => {              // Crear nueva asistencia
  const { user_id, date, entry_time, exit_time, course_id } = req.body;

  try {
    const newAttendance = await Attendance.create({
      user_id,
      date,
      entry_time,
      exit_time,
      course_id
    });
    res.status(201).json(newAttendance);
  } catch (error) {
    console.error('Error creating attendance:', error);
    res.status(400).json({ message: 'Error creating attendance', error });
  }
};

exports.getAllAttendances = async (req, res) => {     // Obtener todas las asistencias
  try {
    const attendances = await Attendance.findAll();
    res.status(200).json(attendances);
  } catch (error) {
    console.error('Error fetching attendances:', error);
    res.status(500).json({ message: 'Error fetching attendances', error });
  }
};

exports.getAttendanceByUser = async (req, res) => {    // Obtener asistencias por usuario
  const { user_id } = req.params;
  try {
    const attendances = await Attendance.findAll({ where: { user_id } });
    res.status(200).json(attendances);
  } catch (error) {
    console.error('Error fetching attendance by user:', error);
    res.status(500).json({ message: 'Error fetching attendance by user', error });
  }
};

