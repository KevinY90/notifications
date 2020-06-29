const router = require('express').Router();
const {User} = require('../../models');

module.exports = router;

router.post('/create', (req, res) => {
    const { username, email } = req.body;
    if ( !username || !email ) {
        res.sendStatus(400);
    } else {
        User.create({
            username,
            email,
        })
        .then(user => res.json(user))
        .catch(e => {
            res.status(400).send({
                error: e.errors
            })
        })
    };
});
