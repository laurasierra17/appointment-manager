

function auth (req, res, next) {
    if(!req.session.logged_in) {
        res.redirect('/');
    } else {
        next();
    }
}

module.exports = auth;