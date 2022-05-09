const httpStatus = require("http-status");
const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const APIError = require("../helpers/api-error");
const logger = require("../helpers/logger");

const createUsers = async ({ username, email, password, confirm }) => {
  let session = null;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const user = new UserModel({
      username,
      email,
      password,
      confirm,
    });

    const createUsers = await user.save({ session });

    if (!createUsers) {
      throw new APIError({
        message: "Error occured while creating a user",
        status: httpStatus.INTERNAL_SERVER_ERROR,
        isPublic: false,
      });
    }

    await session.commitTransaction();

    return {
      message: "User created",
      data: user.id,
    };
  } catch (error) {
    logger.error("Error occured while creating a user", error);
    if (session) {
      await session.abortTransaction();
    }
    throw new APIError(error);
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

module.exports = {
  createUsers,
};
