const { STRING, UUID, UUIDV4 } = require('sequelize');
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
    provider: {
        type: STRING,
        allowNull: false,
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['email'],
        }
    ]
});

module.exports = User;
