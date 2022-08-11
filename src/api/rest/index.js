const router = require('express').Router()

const controller = require('./controller')

router.use('/auth', require('./auth'))
router.use('/pruebas', require('./pruebas'))
router.use('/user', require('./user'))
// router.use('/', controller.indexPage)

module.exports = router