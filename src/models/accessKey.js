const { STRING } = require('sequelize');
const db = require('./connect');

const Key = db.define('Key', {
    key: {
        type: STRING,
        allowNull: false,
    },
});

module.exports = Key;

