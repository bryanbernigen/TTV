const express = require("express");
const router = express.Router();

//Own modules
const UserControllers = require("../Controllers/UserController");

//User routes
router.post("/user/add", UserControllers.addUser);
router.get("/user/:id", UserControllers.getUser);


module.exports = router;