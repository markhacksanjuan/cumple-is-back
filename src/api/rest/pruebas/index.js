const router = require('express').Router()

const controller = require('./controller')

router.get('/', controller.index)
router.patch('/prueba1', controller.prueba1)
router.patch('/prueba2', controller.prueba2)
router.patch('/prueba3', controller.prueba3)
router.patch('/prueba4', controller.prueba4)
router.patch('/prueba5', controller.prueba5)
router.patch('/prueba6', controller.prueba6)

module.exports = router