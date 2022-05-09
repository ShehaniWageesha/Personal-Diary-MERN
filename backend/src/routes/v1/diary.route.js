const express = require("express");

const DiaryController = require("../../controllers/diary.controller.js");

//route - /api/v1/diary
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.get("/", DiaryController.findAll);
router.get("/:id", DiaryController.findOne);
router.post("/", DiaryController.create);
router.patch("/:id", DiaryController.update);
router.delete("/:id", DiaryController.diaryDelete);

module.exports = router;
