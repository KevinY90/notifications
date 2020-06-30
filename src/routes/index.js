const router = require('express').Router();

module.exports = router;

router.use('/api', require('./project_demo'));
router.use('/auth', require('./auth'));
router.use('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
});
