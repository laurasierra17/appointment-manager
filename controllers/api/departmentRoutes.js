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
    
   
});



module.exports = router;