const Sequelize = require('sequelize');
const credentials = process.env.DATABASE_URL || 'postgres://localhost:5432/notifications_project';


const connectToDatabase = () => new Sequelize(credentials, {
    logging: false,
    define: {
        freezeTableName: true,
    }
});

const connection = connectToDatabase();

module.exports = connection;
