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
    if (req.user) {
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
    if (res.task_obj && res.url_obj) {
        const { task_obj, url_obj, user_obj } = res
        if (res.kill_task) {
            res.json({message: 'received', id: task_obj.id})
        } else {
            res.json({message: 'received', id: task_obj.id});
            mq.rpush('tasks', JSON.stringify({task_obj, url_obj, user_obj}));
        }
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