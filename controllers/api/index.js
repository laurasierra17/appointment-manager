const router = require('express').Router();
const appointmentRoutes = require('./appointmentRoutes');
const userRoutes = require('./userRoutes');
const departmentRoutes = require('./departmentRoutes');

router.use('/appointment', appointmentRoutes);
router.use('/department', departmentRoutes);
router.use('/users', userRoutes);

module.exports = router;