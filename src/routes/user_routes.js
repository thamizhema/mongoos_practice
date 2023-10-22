const express = require("express");
const route = express.Router();
const { userRoot, addUsers } = require("../controllers/user_controller");

route.get("/", userRoot);
route.get("/add/users/", addUsers);

module.exports = route;
