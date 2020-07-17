const connection = require('./connect');
const User = require('./user');
const Task = require('./task');
const Url = require('./url');
const Key = require('./accessKey');
const Notification = require('./notification');
const AvailableFunction = require('./function');


User.belongsToMany(Url, { through: Task });
Url.belongsToMany(User, { through: Task });
Task.belongsTo(User)
Task.belongsTo(Url)
User.belongsToMany(Task, { through: Notification});
Task.belongsToMany(User, { through: Notification});
User.hasMany(Url);
Url.belongsTo(User)


module.exports = {
    connection,
    User,
    Task,
    Url,
    Key,
    Notification,
    AvailableFunction,
};
