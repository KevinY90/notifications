const router = require('express').Router();
const { Task }= require('../../models');
const publisher = require('../app');

module.exports = router;

router.post('/create', (req, res) => {
    const {
        name,
        description,
        recurring,
        notification_message,
        notification_type,
        user_id,
        url_id,
    } = req.body;

    Task.create({
        name,
        description,
        recurring,
        notification_message,
        notification_type,
        user_id,
        url_id
    })
    .then(task => {
        publisher.publish('tasks', JSON.stringify(task));
        res.send("Task created.");
    })
    .catch(e => {
        res.status(400).send({
            error: e.errors
        })
    })
});
