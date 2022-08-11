const User = require('../../../models/user')

module.exports.index = (req, res, next) => {
    res.send('PRUEBAS PAGE - INDEX')
}

module.exports.prueba1 = async (req, res, next) => {
    const { id } = req.body
    const update = {
        prueba1: {
            solved: true,
            show: false
        },
        prueba2: {
            solved: false,
            show: true
        }
    }
    try{
        await User.findByIdAndUpdate({ _id: id }, update)
        res.status(200).send({ message: 'user updated' })
    }catch(err){
        console.error(err)
        res.status(500).send({ message: 'Error on patch prueba 1'})
    }
}

module.exports.prueba2 = async (req, res, next) => {
    const { id } = req.body
    const update = {
        prueba2: {
            solved: true,
            show: false
        },
        prueba3: {
            solved: false,
            show: true
        }
    }
    try{
        await User.findByIdAndUpdate({ _id: id }, update)
        res.status(200).send({ message: 'user updated' })
    }catch(err){
        console.error(err)
        res.status(500).send({ message: 'Error on patch prueba 1'})
    }
}

module.exports.prueba3 = async (req, res, next) => {
    const { id } = req.body
    const update = {
        prueba3: {
            solved: true,
            show: false
        },
        prueba4: {
            solved: false,
            show: true
        }
    }
    try{
        await User.findByIdAndUpdate({ _id: id }, update)
        res.status(200).send({ message: 'user updated' })
    }catch(err){
        console.error(err)
        res.status(500).send({ message: 'Error on patch prueba 1'})
    }
}

module.exports.prueba4 = async (req, res, next) => {
    const { id } = req.body
    const update = {
        prueba4: {
            solved: true,
            show: false
        },
        prueba5: {
            solved: false,
            show: true
        }
    }
    try{
        await User.findByIdAndUpdate({ _id: id }, update)
        res.status(200).send({ message: 'user updated' })
    }catch(err){
        console.error(err)
        res.status(500).send({ message: 'Error on patch prueba 1'})
    }
}

module.exports.prueba5 = async (req, res, next) => {
    const { id } = req.body
    const update = {
        prueba5: {
            solved: true,
            show: false
        },
        prueba6: {
            solved: false,
            show: true
        }
    }
    try{
        await User.findByIdAndUpdate({ _id: id }, update)
        res.status(200).send({ message: 'user updated' })
    }catch(err){
        console.error(err)
        res.status(500).send({ message: 'Error on patch prueba 1'})
    }
}

module.exports.prueba6 = async (req, res, next) => {
    const { id } = req.body
    const update = {
        prueba6: {
            solved: true,
            show: false
        }
    }
    try{
        await User.findByIdAndUpdate({ _id: id }, update)
        res.status(200).send({ message: 'user updated' })
    }catch(err){
        console.error(err)
        res.status(500).send({ message: 'Error on patch prueba 1'})
    }
}