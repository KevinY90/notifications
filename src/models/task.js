const { STRING, TEXT, BOOLEAN } = require('sequelize');
const db = require('./connect');

const Task = db.define('task', {
    name: {
        type: STRING(32),
        allowNull: false,
    },
    description: {
        type: TEXT,
    },
    recurring: {
        type: BOOLEAN,
        defaultValue: false,
    },
    finished:{
        type: BOOLEAN,
        defaultValue: false,
    },
    notification_message: {
        type: TEXT,
        defaultValue: "Task Completed",
    },
    notification_type: {
        type: STRING,
        defaultValue: 'email',
    },

});

module.exports = Task;
