const listUsers = (req, res) => {
    res.status(200).send('Users OK')
}

const createUser = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = {
    listUsers,
    createUser
}