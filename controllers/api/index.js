const router = require('express').Router();
const appointmentRoutes = require('./appointmentRoutes');
const userRoutes = require('./userRoutes');
const departmentRoutes = require('./departmentRoutes');
// Router for appointments

router.use('/appointment', appointmentRoutes);
router.use('/department', departmentRoutes);
router.use('/users', userRoutes);

module.exports = router;