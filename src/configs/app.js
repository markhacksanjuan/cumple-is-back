const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

const apiRest = require('../api/rest')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(cors())

app.use(apiRest)

module.exports = app