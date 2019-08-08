const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user')

// Local Strategy
passport.use(
    new LocalStrategy(
        {
            usernameField: "email"
        },
        function(email, password, done){
            User.findOne({
                email
            }).then(dbUser => {
                if(!dbUser){
                    return done(null, false, { message: "Incorrect Email or Password"}) // we don't specify for security sake
                }
                // This is asynchronous to prevent timing based attacks
                return dbUser.checkPassword(password).then(isCorrect => {
                    if(!isCorrect){
                        return done(null, false, { message: "Incorrect Email or Password"}) // we don't specify for security sake
                    } else {
                        // All good, proceed
                        return done(null, dbUser)
                    }
                })
            }).catch(err => console.log(err))
        }
    )
)

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

module.exports = passport

