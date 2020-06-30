const { STRING, TEXT, BOOLEAN, INTEGER} = require('sequelize');
const db = require('./connect');

const Task = db.define('task', {
    id: {
        type:INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: STRING(32),
        allowNull: false,
    },
    description: {
        type: TEXT,
    },
    interval: {
        type: INTEGER,
        defaultValue:500,
        validate: {
            min: 300,
        },
    },
    completed:{
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
    active: {
        type: BOOLEAN,
        defaultValue: false,
    },
    callCount: {
        type: INTEGER,
        defaultValue: 0
    },
});

module.exports = Task;
