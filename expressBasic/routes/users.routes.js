const express = require('express')

// Controllers
const { getAllUsers, createUsers } = require('../controllers/user.controller')

const router = express.Router()

router.get('/', getAllUsers);

router.post('/', createUsers);

module.exports = { usersRouter: router };