const router = require('express').Router();
const { Appointment } = require('../../models')

// Creates a new appointment
router.post('/', async (req, res) => {
    try {
        // Through the request, we get the doctor's and patient's ids, reason for visit, and room number
        const newAppt = await Appointment.create({
            ...req.body,
            patient_id: req.session.user_id
        });

        res.status(200).json(newAppt);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Edit an appointment, found in the profile page


// Delete an appointment

module.exports = router;