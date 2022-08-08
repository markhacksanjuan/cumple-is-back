const router = require('express').Router()

const controller = require('./controller')

router.use('/auth', require('./auth'))
router.use('/', controller.index)
router.use('/pruebas', require('./pruebas'))

module.exports = router