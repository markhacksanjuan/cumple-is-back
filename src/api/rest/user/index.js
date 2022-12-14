const router = require('express').Router()

const controller = require('./controller')

router.get('/', controller.index)
router.get('/fetchUser/:id', controller.fetchUser)

module.exports = router