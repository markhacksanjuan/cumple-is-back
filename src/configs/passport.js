const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const User = require('../models/user')
const passwordManager = require('../services/auth/passwordManager')
const bcrypt = require('bcrypt')

passport.use(
    'signup',
    new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password'
        },
        async (name, password, done) => {
            console.log('passport signup strategy')
            console.log(name)
            console.log(password)
            try{
                const userExists = await User.exists({ name: name.toLowerCase() })
                console.log(userExists)
                if(userExists) return done(null, false, { message: 'El usuario ya existe' })
    
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(password, salt)
                const user = await User.create({ name: name.toLowerCase(), password: hash})
    
                done(null, user, { message: 'User created successfully '})
            }catch(err) {
                console.error(err)
                return done(null, false, { error: err })
            }
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
            console.log(name)
            console.log(password)
            try{
                console.log('finding user by name...')
                const user = await User.findOne({ name: name.toLowerCase() })
                if(!user) return done(null, false, { message: 'Usuario no encontrado' })
    
                const result = await bcrypt.compare(password, user.password)
                if(!result) return done(null, false, { message: 'Password incorrecto' })
    
                return done(null, user, { message: 'Logged in successfully'})

            } catch(err) {
                console.error('Error in login strategy')
                console.error(err)
                return done(null, false, { error: err })
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