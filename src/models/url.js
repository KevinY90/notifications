const { STRING } = require('sequelize');
const db = require('./connect');

const Url = db.define('url', {
    url: {
        type: STRING,
        allowNull: false,
    },
    api_key: {
        type: STRING,
        defaultValue: null,
    },
    keywords: {
        type: STRING,
        validate: {
            notEmpty: true,
        }
    },
    validate_function: {
        type: STRING,
        validate: {
            notEmpty: true,
        }
    },

});

module.exports = Url;
