const passport = require('passport')
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

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