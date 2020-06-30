const { User, Url, Task, Key, AvailableFunction, Notification } = require('./');


const userData = [{
}];

const urlData = [
];

const taskData = [
];

const keys = [

];

const functions = [
    {   
        name: 'percent',
        accepts: 'number',
        description: '',
    },
    {
        name: 'less_than',
        accepts: 'number',
        description: ''
    },
    {
        name:'greater_than',
        accepts: 'number',
        description: '',
    },
    {
        name: 'equals',
        accepts: 'any',
        description: '',
    },
    {
        name: 'did_update',
        accepts: 'any',
        description: '',
    },
    {
        name: 'notify',
        accepts: 'any',
        description: '',
    },

];

const notifications = [
];

const seed = () => Promise.all(functions.map(fn => AvailableFunction.create(fn)));


module.exports = seed;
