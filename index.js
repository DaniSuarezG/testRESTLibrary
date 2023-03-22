require('dotenv').config()
const morgan = require('morgan')
const sequelize = require('./api/db')
const express = require('express')

const api = express()

const router = require('./api/routes')

api.use(morgan('dev'))
api.use(express.json())
api.use('/api', router)

api.listen(process.env.PORT, async error => {
    if (error) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, error)
    console.log(`Express listening on port ${process.env.PORT}`)
    
    try {
        await sequelize.authenticate()
    } catch(error) {
        console.error('ERROR: Unable to connect to the database:', error)
    }
    try {
        await sequelize.sync({alter: true})
    } catch(error) {
        console.log('ERROR: Unable to sync tables to the database:', error)
    }
})