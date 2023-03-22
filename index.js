require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const api = express()

const router = require('./api/routes')

api.use(morgan('dev'))
api.use(express.json())
api.use('/api', router)

api.listen(process.env.PORT, error => {
    if (error) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, error)
    console.log(`Express listening on port ${process.env.PORT}`)
})