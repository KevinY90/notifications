const router = require('express').Router();
const { Url } = require('../../models');

module.exports = router

router.post('/create', (req, res) => {
    const { url, api_key, keywords, validate_function } = req.body;
    Url.create({
        url,
        api_key,
        keywords,
        validate_function
    })
    .then(url => res.json(url))
    .catch(e => {
        res.status(400).send({
            error: e.errors
        })
    });
});
