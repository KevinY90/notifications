const connection = require('./connect');
const User = require('./user');
const Task = require('./task');
const Url = require('./url');


User.belongsToMany(Url, { through: Task });
Url.belongsToMany(User, { through: Task});
User.hasMany(Url)

module.exports = {
    connection,
    User,
    Task,
    Url,
};
