const { STRING } = require('sequelize');
const db = require('./connect');


const User = db.define('user', {
    username: {
        type: STRING(32),
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },

});

module.exports = User;
