const express = require("express");
const { loginUser } = require("../controller/auth-controller");

const router = express.Router();

router.get("/", loginUser);

module.exports = router;
