const UserService = require("../services/user.service");
const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

// Create and Save a new user
const create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Invalid request", errors: errors.array() });
    }

    const { username, email, password, confirm } = req.body;
    const result = await UserService.createUsers({
      username,
      email,
      password,
      confirm
    });
    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Find all users
const findAll = async function (req, res) {
  try {
    var users = await UserService.getUsers();
    return res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

module.exports = {
  create,
};
