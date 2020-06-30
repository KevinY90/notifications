const router = require('express').Router();
const passport = require('passport');
const { Key, User } = require('../models');


module.exports = router;

router.post('/key', (req, res) => {
    const accessKey = req.body;
    Key.findOne({
        where: accessKey
    })
    .then(key => {
        return User.findByPk(key.userId)
    })
    .then(user => res.json(user))
    .catch(e => {
        console.error(e);
        res.status(400).send({
            error: e.errors
        })
    });
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    accessType: 'offline',
    prompt: 'consent',
}));

router.get('/google/callback', 
    passport.authenticate('google', 
    { 
        failureRedirect: '/' 
    }), (req, res) => {
        res.redirect('/');
    });

router.get('/facebook', passport.authenticate('facebook', {
    scope: 'email',
}));

router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/',
}), (req, res) => {
    res.redirect('/')
});
