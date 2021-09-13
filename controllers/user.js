const models = require('../models')

module.exports = {
    async listAllUsers(req, res) {
        let r = {}
        r.total = await models.user.count({})
        r.users = await models.user.findAll({ attributes: ['name', 'surname', 'mail', 'username'] })

        res.json(r)

    },

    async listOneUser(req, res) {
        let r = {}
        r.user = await models.user.findOne({ where: { id: req.params.id }, attributes: ['name', 'surname', 'mail', 'username'] })
        res.status(200).json(r)
    },

    async updateUser(req, res, next) {
        const updateFields = req.body
        await models.user.update(req.body, { where: { id: req.params.id } })
        const user = await models.user.findOne({ where: { id: req.params.id }, attributes: ['name', 'surname', 'mail', 'username'] })
        
        res.status(200).json(user);
    },


    deleteUser(req, res) { },
}