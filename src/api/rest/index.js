const router = require('express').Router()

const controller = require('./controller')

router.use('/auth', require('./auth'))
router.use('/', controller.index)
router.use('/pruebas', require('./pruebas'))
router.use('/user', require('./user'))

module.exports = router