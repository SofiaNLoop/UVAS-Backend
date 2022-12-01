const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UsersController");

router.get('/', UserController.CreateUser);


module.exports = router;