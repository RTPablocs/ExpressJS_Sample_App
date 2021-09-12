const models = require('../models')


module.exports = {
    listAllUsers(req, res) {
        const users = models.user.findAll({})
        .then(users => res.json(users))
        .catch(console.error)
    }
}