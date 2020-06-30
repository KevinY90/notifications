const { STRING, BOOLEAN, INTEGER } = require('sequelize');
const db = require('./connect');

const Url = db.define('url', {
    url: {
        type: STRING,
        allowNull: false,
    },
    headers: {
        type: STRING,
    },
    params: {
        type: STRING,
    },
    fields: {
        type: STRING,
        validate: {
            notEmpty: true,
        }
    },
    html: {
        type: BOOLEAN,
        validate: {
            notEmpty: true,
        }
    },
});

module.exports = Url;
