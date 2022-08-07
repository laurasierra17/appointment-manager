const router = require('express').Router();
const { Department } = require('../../models')

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
        // Get all departments
        const dptData = await Department.findAll();
    
        // Serialize data so the template can read it
        const departments = dptData.map((data) => data.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('appointment', { 
            departments, 
        //   logged_in: req.session.logged_in 
        });
        } catch (err) {
        res.status(500).json(err);
        }
   
});



module.exports = router;