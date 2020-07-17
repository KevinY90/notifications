const { User, Url, Task, Key, AvailableFunction, Notification } = require('./');


const userData = [{
    email: 'kyu199023@gmail.com',
    username: 'Kevin Yu',
    provider: 'google'
}];

const urlData = [
    {
        url: 'https://api.covid19api.com/summary',
        headers: '',
        params: '',
        fields: 'Global.NewConfirmed-greater_than-1000000',
        html: false,
        userId: 1,
    },
];

const taskData = [
    {
        name: 'Test', 
        description: 'Test',
        interval: 500,
        completed: false,
        notification_message: 'test',
        notification_type: 'email',
        active: false, 
        callCount: 0,
        userId: 1,
        urlId: 1,
    },
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


const seed = async () => {
    await functions.map(fn => AvailableFunction.create(fn))
};

module.exports = seed;
