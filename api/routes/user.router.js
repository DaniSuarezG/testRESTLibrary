const { listUsers, createUser } = require('../controllers/user.controller')

const router = require('express').Router()

router.get('/', listUsers)

router.post('/', createUser)

module.exports = router