const express = require("express");
const User = require("../model/user-model");
const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controller/user-controller");
const requireAuth = require("../middleware/auth-middleware");

const router = express.Router();

router.use(requireAuth);

// GET all users
router.get("/", getUsers);

// GET a single user
router.get("/:id", getUser);

// POST a new user
router.post("/", createUser);

// DELETE a user
router.delete("/:id", deleteUser);

// UPDATE a user
router.patch("/:id", updateUser);

module.exports = router;
