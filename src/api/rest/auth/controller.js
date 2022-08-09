const passport = require('passport')
const User = require('../../../models/user')

module.exports.index = (req, res, next) => {
    res.send('AUTH PAGE - INDEX')
}

module.exports.signup = async (req, res, next) => {
    console.log('signup page')
    console.log('starting passport signup strategy')
    passport.authenticate('signup', async (err, user, info) => {
            if(err){
                res.status(500).send({ errorMessage: 'Algo ha ido mal con Signup'})
                return
            }
            if(!user){
                res.status(500).send(info)
                return
            }
            res.status(200).send({ message: info })
    })(req, res, next)
}

module.exports.login = async (req, res, next) => {
    console.log('login page')
    console.log('starting passport login strategy')
    passport.authenticate('login', (err, user, info) => {
        if(err){
            res.status(500).send({ errorMessage: 'Something went wrong authentication user' })
            return
        }
        if(!user){
            res.status(500).send(info)
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
    })(req, res, next)
}
module.exports.getUsers = async (req, res, next) => {
    console.log('get all users from database')
    try{
        const response = await User.find({})
        console.log('this is the response from db')
        console.log(response)
        res.status(200).send({ users: response })
    }catch(err) {
        res.status(500).send({ message: err.message })
    }
}