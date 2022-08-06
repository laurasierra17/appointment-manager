const router = require('express').Router();
const { Appointment } = require('../../models')

// Creates a new appointment
router.post('/', async (req, res) => {
    try {
        // Through the request, we get the doctor's and patient's ids, time of appt, reason for visit, and room number
        const newAppt = await Appointment.create({
            ...req.body,
            patient_id: req.session.user_id
        });

        res.status(200).json(newAppt);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Edit an appointment through the profile page
router.put('/:id', async (req, res) => {
    try {
        const apptData = await Appointment.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        if (!apptData) {
            res.status(400).json({ message: 'No appointment found' });
            return;
        }

        res.status(200).json(apptData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete an appointment
router.delete('/:id', async (req, res) => {
    try {
        const appData = await Appointment.destroy({
            where: {
                id: req.params.id,
                patient_id: req.session.patient_id
            }
        });

        if (!apptData) {
            res.status(400).json({ message: 'No appointment found' });
            return;
        }

        res.status(200).json(appData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;