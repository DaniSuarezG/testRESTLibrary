const router = require('express').Router()
const bookRouter = require('./book.router')
const userRouter = require('./user.router')

router.use('/users', userRouter)
router.use('/books', bookRouter)

module.exports = router