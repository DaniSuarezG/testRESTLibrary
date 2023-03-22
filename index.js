require('dotenv').config()
const express = require('express')
const api = express()

api.get('/books', (req, res) => {
    res.send('API OK')
})

api.listen(process.env.PORT, error => {
    if (error) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, error)
    console.log(`Express listening on port ${process.env.PORT}`)
})