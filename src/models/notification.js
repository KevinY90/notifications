const { INTEGER } = require('sequelize');
const db = require('./connect');

const Notification = db.define('notification', {

    count: {
        type: INTEGER,
        defaultValue: 1,
    }
});

module.exports = Notification;
