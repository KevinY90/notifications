const router = require('express').Router();
const { Url } = require('../../models');

module.exports = router

router.get('/:id', (req, res, next) => {
    const userId = req.params.id
    Url.findAll({
        where: {
            userId
        }
    })
    .then(userUrls => {
        res.json(userUrls)
    })
    .catch(e => next(e))
});

router.post('/create', (req, res) => {
    const { url, headers, params, html, fields, userId } = req.body;
    Url.create({
        url,
        headers,
        params,
        fields,
        html,
        userId,
    })
    .then(url => res.json(url))
    .catch(e => {
        res.status(400).send({
            error: e.errors
        })
    });
});
