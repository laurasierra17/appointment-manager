const router = require('express').Router();
const appointmentRoutes = require('./appointmentRoutes');
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./departmentRoutes');
// Router for appointments

router.use('/appointment', appointmentRoutes);
//router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes);

module.exports = router;