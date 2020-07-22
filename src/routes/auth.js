const router = require('express').Router();
const passport = require('passport');
const { Key, User } = require('../models');


module.exports = router;

router.post('/demo', (req, res, next) => {
    if (process.env.DEMO) {
        const demo = process.env.DEMO_ACC;
        User.findOne({
            where: { 
                email: demo,
            }
        })
        .then(demo => res.json(demo))
        .catch(e => {
            next(e)
        })
    };
});

router.get('/mode', (req, res, next) => {
    const isDemo = process.env.DEMO;
    return res.json({
        demo: isDemo !== null || isDemo !== undefined
    })
});

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
