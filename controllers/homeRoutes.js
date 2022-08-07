const router = require('express').Router();
const { Patient, Appointment, Department, Doctor } = require('../models')

// Render profile page of logged in patient
router.get('/profile/:id', async (req, res) => {
    try {
        // Find patient based on user id stored in session
        const patientData = await Patient.findByPk(1, {
            attributes: ['first_name', 'last_name'],
            include: [
                {
                    model: Appointment,
                    where: {
                        patient_id: 1,
                    },
                    // include: {
                    //     model: Doctor,
                    //     where: {
                    //         id: 
                    //     }
                    // }
                }]
        });

        // if the patientData has only one appointment
        let patient;
        if (!Array.isArray(patientData)) {
            // Parse for readability
            patient = [];
            patient.push(patientData.get({ plain: true }));
        } else {
            // Parse for readability
            patient = patientData.map(res => res.get({ plain: true }));
        }

        // Iterate through the array of the patient's appointments and add their corresponding doctor's last name
        const patientInfo = patient.map(async (patient) =>  {
            // Get the Doctor's name associated to the Appointment
            const doctorData = await Doctor.findByPk(patient.appointment.doctor_id, {
                attributes: ['last_name']
            });
            const doctor = doctorData.get({ plain: true });
            patient.doctor_name = doctor.last_name;
            return patient;
        })
        res.json(patient)

        // Render profile page with information from the database
        // res.render('profile', { ...patient })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;