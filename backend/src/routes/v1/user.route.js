const express = require("express");

const UserController = require("../../controllers/user.controller.js");

//route - /api/v1/user
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.post("/", UserController.create);

module.exports = router;
