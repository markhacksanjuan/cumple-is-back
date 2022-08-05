const router = require('express').Router()

const controller = require('./controller')

router.post('/', controller.index)
router.post('/signup', controller.signup)
router.post('/login', controller.login)

module.exports = router