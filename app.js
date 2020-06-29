const express = require('express');
const env = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const { connection } = require('./src/models');

if (process.env.NODE_ENV === 'development') {
    env.config();
};

const publisher_options = {
    host: process.env.MQ_HOST,
    port: process.env.MQ_PORT,
    password: process.env.MQ_PASS,
};

const publisher = require('redis').createClient(publisher_options);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(morgan('combined'));
app.use('/', require('./src/routes'));

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

const start_server = () => connection
    .sync({force: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log('Listen: ', PORT)
        })
    })
    .catch(e => {
        console.error('Error', e)
    });

start_server();

module.exports = publisher;
