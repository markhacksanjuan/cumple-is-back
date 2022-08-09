const router = require('express').Router()

const controller = require('./controller')

router.get('/', controller.index)
router.post('/prueba1', controller.prueba1)
router.post('/prueba2', controller.prueba2)
router.post('/prueba3', controller.prueba3)
router.post('/prueba4', controller.prueba4)
router.post('/prueba5', controller.prueba5)
router.post('/prueba6', controller.prueba6)

module.exports = router