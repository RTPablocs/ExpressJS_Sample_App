const models = require('../models')

module.exports = {
    async listAllUsers(req, res) {
        let r = {}
        r.total = await models.user.count({})
        r.users = await models.user.findAll({ attributes: ['id', 'name', 'surname', 'mail', 'username', 'department'] })

        res.status(200).json(r)

    },

    async listOneUser(req, res) {
        let r = {}
        r.user = await models.user.findOne({ where: { id: req.params.id }, attributes: ['id', 'name', 'surname', 'mail', 'username', 'department'] })
        res.status(200).json(r)
    },

    async getMyOwnData(req, res) {
        let r = {}
        r.user = await models.user.findOne({ where: { id: req.params.id } })
        res.status(200).json(r)

    },

    async registerUser(req, res) {
        await models.user.create(req.body)
            .then((response) => { res.status(200).json(response) })
            .catch(error => { res.status(413).json(error.message) })

    },

    async updateUser(req, res) {
        await models.user.update(req.body, { where: { id: req.params.id } })
        const user = await models.user.findOne({ where: { id: req.params.id }, attributes: ['name', 'surname', 'mail', 'username'] })
        res.status(200).json(user);
    },


    async deleteUser(req, res) {
        await models.user.delete({ where: { id: req.params.id } })
    },
}