const express = require('express');

//Middlewares
const { userExists } = require('../middlewares/users.middlewares');

// Controller
const {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

// router.get("/", getAllUsers);

// router.post("/", createUsers);

router.route('/').get(getAllUsers).post(createUsers);

// router.get("/:id", userExists, getUserById);

// router.patch("/:id", updateUser);

// router.delete("/:id", deleteUser);

router
  .route('/:id')
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
