const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const User = require('../models/user')
const passwordManager = require('../services/auth/passwordManager')

passport.use(
    'signup',
    new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password'
        },
        async (req, name, password, done) => {
            // const userExists = User.exists({name})
            const userExists = await User.exists({ name })
            console.log(userExists)
            if(userExists) return done(null, false, { message: 'El usuario ya existe' })

            const hash = await passwordManager.hash(password)
            const user = await User.create({ name, password: hash})

            done(null, user, { message: 'User created successfully '})
        }
    )
)

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password'
        },
        async (name, password, done) => {
            console.log('passport login strategy')
            try{
                const user = await User.findOne({ name })
                if(!user) return done(null, false, { message: 'Nombre o password incorrectos' })
    
                const result = await passwordManager.check(password, user.password)
                if(!result) return done(null, false, { message: 'Nombre o password incorrectos' })
    
                return done(null, user, { message: 'Logged in successfully'})

            } catch(err) {
                console.error(err)
            }
        }
    )
)

passport.use(
    'jwt',
    new JWTstrategy(
        {
            secretOrKey: 'secret',
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken
        },
        (token, done) => {
            try {
                return done(null, token)
            }catch (err) {
                done(err)
            }
        }
    )
)