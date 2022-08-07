const router = require('express').Router();
const { Patient } = require('../../models')


// LOG IN
router.post('/login', async (req, res) => {
    try {
        const userData = await Patient.findOne({ where: {user_name: req.body.user_name}});
        if(!userData) {
            res.status(404).json({ message: 'No user exists, please use an existing username or sign up.'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password'});
            return;
        }
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
          });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

// SIGN UP
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        console.log(req.body);
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