const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

const apiRest = require('../api/rest')
const corsMiddleware = require('../api/middleware/cors')
require('../services/auth')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(cors())
app.use(cors({
    origin: ['http://localhost:3000', 'https://cumple-isa.vercel.app'],
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Access-Control-Allow-Origin']
}))
// app.use(corsMiddleware)

app.use(apiRest)

app.use((req, res, next) => {
    res.status(400)
    res.send('NOT FOUND')
})
app.use((err, req, res, next) => {
    if(!res.headersSent){
        res.status(500)
        res.send('ERROR')
    }
})

module.exports = app