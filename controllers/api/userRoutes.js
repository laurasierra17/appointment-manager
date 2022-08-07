const router = require('express').Router();
const { Patient } = require('../../models')


// LOG IN
router.post('/:username', async (req, res) => {
    try {
        const userData = await Patient.findByPk(req.params.username);
        if(!userData) {
            res.status(404).json({ message: 'No user exists, please use an existing username or sign up.'});
            return;
        }
        res.redirect(userData);
    } catch (err) {
        res.status(500).json(err);
    }
    
});

// SIGN UP
router.post('/', async (req, res) => {
    try {
        console.log(req);
        const userData = await Patient.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
          });
        
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;