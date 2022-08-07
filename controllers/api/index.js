const router = require('express').Router();
const appointmentRoutes = require('./appointmentRoutes');
const userRoutes = require('./userRoutes');
// Router for appointments
router.use('/appointment', appointmentRoutes);
router.use('/users', userRoutes); 

module.exports = router;