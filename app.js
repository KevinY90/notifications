const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const env = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const cookieSession = require('cookie-session');
const { connection } = require('./src/models');

if (process.env.NODE_ENV === 'development') {
    env.config();
};
require('./src/routes/passport-setup');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.use(cookieSession({
    name: 'kyprojectdemo-session',
    secret: process.env.APP_SKEY,
    maxAge: (Math.pow(10, 6)*3.6),
    secure: process.env.NODE_ENV !== 'development',
}));

app.use(passport.initialize());

app.use(passport.session());

app.use(morgan('combined'));

app.use('/', require('./src/routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke")
});

const startServer = () => connection
    .sync({force: true})
    .then(() => {
        const seed = require('./src/models/seed')()
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Listen: ', PORT)
        })
    })
    .catch(e => {
        console.error('Error', e)
    });

startServer();
