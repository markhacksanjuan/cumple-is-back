const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../../models/user')
const passwordManager = require('./passwordManager')

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, name, password, done) => {
            console.log('passport login strategy')
            const user = await User.findOne({ name })
            if(!user) return done(null, false, { message: 'Nombre o password incorrectos' })

            const result = await passwordManager.check(password, user.password)
            if(!result) return done(null, false, { message: 'Nombre o password incorrectos' })

            return done(null, user)
        }
    )
)