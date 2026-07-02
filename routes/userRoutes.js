const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Create User & Get All Users
router.route("/")
  .post(createUser)
  .get(getUsers);

// Get, Update & Delete User by ID
router.route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;