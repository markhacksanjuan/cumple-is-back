require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
// const chalk = require('chalk')
const mongoose = require('./services/mongoose')

require('./configs/mongoose')

const app = express()
const apiRest = require('./api/rest')

const PORT = process.env.PORT || 3000

const http = require('http').createServer(app)

app.disable('x-powered-by')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(apiRest)

http.listen(PORT, () => {
    // console.log(chalk.blue.inverse.bold('Conectado al puerto ', PORT))
    console.log('Conectado al puerto: ', PORT)
})

module.exports = app