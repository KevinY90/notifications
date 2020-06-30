const router = require('express').Router();
const {User, Notification} = require('../../models');


module.exports = router;


router.get('/:id', (req, res, next) => {
    User.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(e => next(e))
});

router.get('/notifications/:id', (req, res, next) => {
    const userId = req.params.id
    Notification.findAll({
        where: { userId }
    })
    .then(userNotifications => {
        console.log(userNotifications);
        res.json(userNotifications)
    })
    .catch(e => next(e))
})

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
