const { STRING, UUID, UUIDV1 } = require('sequelize');
const db = require('./connect');

const Session = db.define('Session', {
    uuid: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV1,
    },
    provider: {
        type: STRING,
        allowNull: false,
        defaultValue: 'project',
    },
});

module.exports = Session;
