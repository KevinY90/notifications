const router = require('express').Router();
const { AvailableFunction } = require('../../models');
const axios = require('axios');

module.exports = router;

router.get('/functions', (req, res, next) => {
    AvailableFunction.findAll()
    .then(functions => functions.map(fn => fn.name))
    .then(available => res.json(available))
    .catch(e => next(e));
});

router.post('/test/payload', async (req, res, next) => {
    const { targetUrl, hArgs, queryParams } = req.body;
    try {
        const response = await axios.get(`${targetUrl}?${queryParams}`, {
            headers: hArgs
        })
        return res.json(response.data)
    } catch(e) {
        next(e)
    };
});
