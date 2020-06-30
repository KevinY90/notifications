const router = require('express').Router();
const { Task, Url, User }= require('../../models');

module.exports = router;

router.get('/:id', (req, res, next) => {
    const userId = req.params.id
    Task.findAll({
        where: {
            userId
        }
    })
    .then(userTasks => {
        res.json(userTasks)
    })
    .catch(e => next(e))
});

router.post('/create', (req, res) => {
    const {
        name,
        description,
        interval,
        notification_message,
        notification_type,
        userId,
        urlId,
    } = req.body;

    Task.create({
        name,
        description,
        interval,
        notification_message,
        notification_type,
        userId,
        urlId
    })
    .then(task => {
        res.json(task)
    })
    .catch(e => {
        console.log(e);
        res.status(400).send({
            error: e.errors
        })
    })
});

router.post('/start', (req, res, next) => {
    console.log(req.body);
    const id = parseInt(req.body.id)
    Task.findByPk(id)
    .then(task => {
        res.task_obj = task.dataValues;
        if (res.task_obj.active) res.kill_task = true;
        return task
    })
    .then(task => Task.update({active: !task.active}, {
        where: { id: task.id}
    }))
    .then(task => Url.findOne({
        where: task.urlId
    }))
    .then(url => {
        res.url_obj = url.dataValues
        return url.userId
    })
    .then(userId => User.findOne({
        userId
    }))
    .then(user => {
        res.user_obj = user.dataValues;
        next()
    })
    .catch(e => {
        console.error(e)
        res.status(400).send({
            error: e.errors
        })
    })
});

router.put('/update/:id', (req, res) => {
    const taskId = req.params.id
    const updates = req.body 
    Task.update(updates, {
        where: { taskId }
    })
    .then(result => res.json(result))
    .catch(e => {
        console.error(e)
        res.status(400).send({
            error:e.errors
        })
    })
});
