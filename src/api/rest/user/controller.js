const User = require('../../../models/user')

module.exports.index = (req, res, next) => {
    res.send('USER PAGE - INDEX')
}
module.exports.fetchUser = async (req, res, next) => {
    console.log('fetch user page')
    const { id } = req.params
    try{
        const user = await User.findById({ _id: id })
        res.status(200).send({ user })
    }catch(err) {
        console.error(err)
        res.status(500).send({ message: 'error on fetch user' })
    }
}