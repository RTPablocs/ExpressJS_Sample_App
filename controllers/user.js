const models = require('../models')


module.exports = {
    async listAllUsers(req, res) {
        let r = {}
        r.total = await models.user.count({})
        r.users = await models.user.findAll({})

        res.json(r);
    },

    listOneUser(req, res) {

    },

    updateUser(req, res) { },


    deleteUser(req, res) { },
}