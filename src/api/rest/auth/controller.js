const passport = require('passport')

const User = require('../../../models/user')

module.exports.index = (req, res, next) => {
    res.send('AUTH PAGE - INDEX')
}

module.exports.signup = async (req, res, next) => {
    passport.authenticate('signup', async (err, user, info) => {
        try {
            if(err){
                res.status(500).send({ errorMessage: 'Algo ha ido mal con Signup'})
                return
            }
            if(!user){
                res.send(info)
                return
            }
            const userToFront = await User.findById({ _id: user._id })
            console.log(userToFront)
            req.login(
                userToFront,
                { session: false },
                error => {
                    if(error) {
                        res.status(400).send({ errorMessage: 'Something went wrong when login' })
                        return next(error)
                    }
                    return res.send({ user: userToFront})
                }
            )
        }catch(err) {

        }
    })(req, res, next)
}

module.exports.login = async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if(err){
                res.status(500).send({ errorMessage: 'Something went wrong authentication user' })
                return
            }
            if(!user){
                res.send(info)
                return
            }
            req.login(
                user,
                { session: false },
                error => {
                    if(error) {
                        res.status(400).send({ errorMessage: 'Something went wrong when login' })
                        return next(error)
                    }
                    return res.send({ user, message: info.message })
                }
            )
        }catch(err) {
            next(err)
        }
    })
}