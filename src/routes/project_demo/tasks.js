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
    const id = parseInt(req.body.id)
    Task.findOne({
        where: {
            id
        },
        include: [{model: User}, {model: Url}],
    })
    .then(task => {
        const data = task.dataValues;
        res.task = {
            id: data.id,
            description: data.description,
            interval: data.interval,
            completed: data.completed,
            notification_message: data.notification_message,
            active: data.active,
            callCount: data.callCount,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        };
        res.user = data.user.dataValues;
        res.url = data.url.dataValues;
        res.killTask = data.active === true
        next()
    })
    .catch(e => {
        next(e);
    })
})

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
