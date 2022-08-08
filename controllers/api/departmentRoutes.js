const router = require('express').Router();
const { Department, Doctor } = require('../../models')

// Gets list of departments
router.get('/', async (req, res) => {
    try {
        // Through the request, we get a list of all departments
        const newDepartment = await Department.findAll();

        res.status(200).json(newDepartment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const docList = await Department.findAll({
            include: {
                model: Doctor,
                where: {
                    department_id: req.params.id,
                }
            }
        });
        const doctorsList = docList.map(doc => doc.get({plain: true}));
        const doctor = doctorsList[0].doctors;
        console.log(doctor);
        res.render('appointment', {
            doctor,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
   
});



module.exports = router;