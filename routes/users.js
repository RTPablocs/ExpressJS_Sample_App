const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js')


router.get('/', userController.listAllUsers)

router.get('/:id', (req, res) => {
    res.json('')
})

router.post('/new')

module.exports = router