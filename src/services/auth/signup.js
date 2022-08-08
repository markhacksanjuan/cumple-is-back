const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../../models/user')
const passwordManager = require('./passwordManager')

passport.use(
    'signup',
    new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, name, password, done) => {
            // const userExists = User.exists({name})
            const userExists = await User.exists({ name })
            console.log(userExists)
            if(userExists) return done(null, false, { message: 'El usuario ya existe' })

            const hash = await passwordManager.hash(password)
            const user = await User.create({ name, password: hash})

            done(null, user)
        }
    )
)