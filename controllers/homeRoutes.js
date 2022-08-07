const router = require('express').Router();

const { Patient, Appointment, Doctor, Department} = require('../models')

const auth = require('../utils/auth');

// Render profile page of logged in patient
router.get('/profile/:id', auth, async (req, res) => {
    try {
        // Find patient based on user id stored in session
        const patientData = await Patient.findByPk(req.params.id,
            {
                attributes: ['first_name', 'last_name'],
                include: [
                    {
                        model: Appointment,
                        through: {
                            attributes: []
                        }
                    }]
            }
        );

        const patient = patientData.get({plain: true});

        // Iterate through the array of the patient's appointments and add their corresponding doctor's last name
        const data = [];
        for (var appt of patient.appointments) {
            // Get the Doctor's name associated to the Appointment
            const doctorData = await Doctor.findByPk(appt.doctor_id, {
                attributes: ['last_name']
            });
            const doctor = doctorData.get({ plain: true });
            appt.doctor_name = doctor.last_name;
            data.push(appt);
        }

        // Render profile page with information from the database
        res.render('profile', {
            first_name: patient.first_name,
            last_name: patient.last_name,
            data: [...data]
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});


router.get('/', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', auth, async (req, res) => {
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