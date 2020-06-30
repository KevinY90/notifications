const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const { User } = require('../models');


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    User.findOne({
        where: {
            email: user.email,
        },
    })
    .then(found => {
        if (!found) return User.create({
            email: user.email,
            username: user.name,
            provider: user.provider,
        })
        else if (found.provider !== user.provider) {
            throw new Error('A user with this email already exists')
        } else {
            return found
        }
    })
    .then(user => {
        done(null, user)
    })
    .catch(error => {
        console.error(error)
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SKEY,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, (accessToken, refreshToken, profile, done) => {
    return done(null, { 
        name: profile.displayName,
        email: profile._json.email,
        provider: 'google',
    })
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SKEY,
    callbackURL: process.env.FB_CALLBACK_URL,
    profileFields: ['email', 'displayName']
}, (accessToken, refreshToken, profile, done) => {
    const { name, email } = profile._json;
    return done(null, {
        name,
        email,
        provider: 'facebook',
    })
}));
