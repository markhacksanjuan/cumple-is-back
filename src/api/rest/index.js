const router = require('express').Router()

const controller = require('./controller')

router.use('/auth', require('./auth'))
router.use('/', controller.index)

module.exports = router