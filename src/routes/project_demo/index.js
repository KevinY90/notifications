const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));
router.use('/jobs', require('./urls'));


module.exports = router;
