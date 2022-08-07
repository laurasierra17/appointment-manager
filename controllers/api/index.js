const router = require('express').Router();
const appointmentRoutes = require('./appointmentRoutes');
const departmentRoutes = require('./departmentRoutes');

// Router for appointments
router.use('/appointment', appointmentRoutes);
router.use('/departments', departmentRoutes);

module.exports = router;