const { STRING, TEXT } = require('sequelize');
const db = require('./connect');


const AvailableFunction = db.define('available_function', {
    name: {
        type: STRING,
        allowNull: false,
    },
    accepts: {
        type: STRING,
    },
    description: {
        type: TEXT,
    },
});

module.exports = AvailableFunction;

