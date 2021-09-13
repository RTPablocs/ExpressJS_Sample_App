const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js')


router.get('/', userController.listAllUsers)

router.get('/:id', userController.listOneUser)

router.post('/update/:id', userController.updateUser)

module.exports = router