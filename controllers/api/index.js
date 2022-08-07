const router = require('express').Router();
const appointmentRoutes = require('./appointmentRoutes');

// Router for appointments
router.use('/appointment', appointmentRoutes);

module.exports = router;