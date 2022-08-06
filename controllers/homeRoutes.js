const router = require('express').Router();

// Render profile page of logged in patient
router.get('/profile' , async (req, res) => {
    try {
        // Find patient based on user id stored in session

        // Parse for readability

        res.render('profile');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;