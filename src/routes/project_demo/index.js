const router = require('express').Router();
const redis = require('redis');
const { User } = require('../../models');

module.exports = router;

const mq_options = {
    host: process.env.MQ_HOST,
    port: process.env.MQ_PORT,
    password: process.env.MQ_PASS,
};
const mq = redis.createClient(mq_options);



router.use((req, res, next) => {
    if (req.user || process.env.DEMO) {
        next();
    } else {
        res.sendStatus(401);
    };
});

router.get('/session', (req, res, next) => {
    const email = req.user.email;
    User.findOne({
        where : {
            email
        }
    })
    .then(user => res.json(user))
    .catch(e => {
        next(e)
    })
});

router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));
router.use('/urls', require('./urls'));
router.use('/resources', require('./resources'));
router.use((req, res, next) => {
    if (res.task) {
        const { task, url, user } = res;
        if (res.killTask) {
            mq.rpush('tasks', JSON.stringify({task, url, user}));
        };
        res.json({message: 'received', id: task.id})
    } else if (res.create_message) {
        const { channel, message } = res.create_message;
        mq.publish(channel, message);
        res.json({ message: 'received'});
    } else {
        next();
    };
});

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(400).send({
        error: err.errors
    })
});