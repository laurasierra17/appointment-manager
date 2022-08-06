const router = require('express').Router();
const { Patient, Appointment } = require('../models')

// Render profile page of logged in patient
router.get('/profile/:id' , async (req, res) => {
    try {
        // Find patient based on user id stored in session
        const patientData = await Patient.findByPk(1, {
            include: {
                model: Appointment,
                where: {
                    patient_id: 1
                }
            }
        });

        // Parse for readability
        // const patient = patientData.get({ plain: true });
        console.log("patientdata", patientData);

        // res.render('profile');
        res.json(patientData)
        // res.render('profile', { ...patientData })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;