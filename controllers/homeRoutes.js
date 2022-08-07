const router = require('express').Router();
const { Patient, Appointment, Doctor, Department} = require('../models')

// Render profile page of logged in patient
router.get('/profile/:id' , async (req, res) => {
    try {
        // Find patient based on user id stored in session
        const patientData = await Patient.findByPk(req.session.patient_id, {
            include: {
                model: Appointment
            }
        });
        // Parse for readability
        patientData = patientData.get({ plain: true });

        res.render('profile');
        // res.render('profile', { ...patientData })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try { 
        const departmentData = await Department.findAll();
        // Parse for readability
        departmentData = departmentData.get({ plain: true });

        res.render('dashboard');
        // res.render('profile', { ...patientData })
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;