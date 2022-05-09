const httpStatus = require("http-status");
const mongoose = require("mongoose");
const DiaryModel = require("../models/diary.model");
const APIError = require("../helpers/api-error");
const logger = require("../helpers/logger");

const createDiaries = async ({ review, description, date }) => {
  let session = null;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const diary = new DiaryModel({
      review,
      description,
      date,
    });

    const createDiaries = await diary.save({ session });

    if (!createDiaries) {
      throw new APIError({
        message: "Error occured while creating a diary",
        status: httpStatus.INTERNAL_SERVER_ERROR,
        isPublic: false,
      });
    }

    await session.commitTransaction();

    return {
      message: "Diary creation done successfully",
      data: diary.id,
    };
  } catch (error) {
    logger.error("Error occured while creating a diary", error);
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

const getDiaries = async function (data) {
  try {
    const allDiaries = await DiaryModel.find(data);
    return {
      message: "Listing all diaries",
      data: allDiaries,
    };
  } catch (e) {
    // Log Errors
    throw Error("Error while getting diaries");
  }
};

const getDiaryById = async (id) => {
  try {
    const foundDiary = await DiaryModel.findById(id);
    console.log("Diaries : ", foundDiary);
    return {
      message: "Listing a single diary",
      data: foundDiary,
    };
  } catch (error) {
    logger.error("Error occured while reading the diary", error);
    throw new APIError(error);
  }
};

const updateDiary = async ({ id, review, description, date }) => {
  try {
    const diary = await DiaryModel.findById(id);

    diary.overwrite({ username, description, date });
    await diary.save();

    return {
      message: "Diary updated successfully",
      data: diary,
    };
  } catch (error) {
    logger.error("Error occured while updating the diary", error);
  }
};

const deleteDiary = async (id) => {
  try {
    const diary = await DiaryModel.deleteOne({ _id: id });
    console.log(diary);
    return {
      message: "Diary deleted successfully",
    };
  } catch (error) {
    logger.error("Error occured while deleting the diary", error);
  }
};

module.exports = {
  createDiaries,
  getDiaries,
  getDiaryById,
  updateDiary,
  deleteDiary,
};
