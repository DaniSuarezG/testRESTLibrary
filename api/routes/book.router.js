const { listBooks, createBook } = require('../controllers/book.controller')

const router = require('express').Router()

router.get('/', listBooks)

router.post('/', createBook)

module.exports = router