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
        // Get all departments
        const dptData = await Department.findAll();
    
        // Serialize data so the template can read it
        const departments = dptData.map((data) => data.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('dashboard', { 
            departments, 
        //   logged_in: req.session.logged_in 
        });
        } catch (err) {
        res.status(500).json(err);
        }
});



module.exports = router;