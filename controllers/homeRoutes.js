const router = require('express').Router();
const { Patient, Appointment, Department, Doctor } = require('../models')

// Render profile page of logged in patient
router.get('/profile/:id', async (req, res) => {
    try {
        // Find patient based on user id stored in session
        const patientData = await Patient.findByPk(req.session.user_id, {
            include:
            {
                model: Appointment,
                where: {
                    patient_id: req.session.user_id
                }
            }
        });
        // Parse for readability
        const patient = patientData.get({ plain: true });

        // Get the Doctor's name associated to the Appointment
        const doctorData = await Doctor.findByPk(patient.appointment.doctor_id, {
            attributes: ['last_name']
        });
        const doctor = doctorData.get({ plain: true });

        // Render profile page with information from the database
        res.render('profile', { ...patient, doctor })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;