const DiaryService = require("../services/diary.service");
const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

const create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Invalid request", errors: errors.array() });
    }

    const { review, description, date } = req.body;

    const result = await DiaryService.createDiaries({
      review,
      description,
      date,
    });
    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

const findAll = async function (req, res) {
  try {
    var diaries = await DiaryService.getDiaries();
    return res.status(200).json({
      status: 200,
      data: diaries,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

const findOne = async (req, res) => {
  try {
    const diary = await DiaryService.getDiaryById(req.params.id);
    res.status(200).json(diary);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { review, description, date } = req.body;

    const result = await DiaryService.updateDiary({
      id,
      review,
      description,
      date,
    });

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

const diaryDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await DiaryService.deleteDiary(id);

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

module.exports = {
  create,
  findOne,
  findAll,
  update,
  diaryDelete,
};
