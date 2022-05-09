const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const diarySchema = new Schema(
  {
    review: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, require: true },
  },
  {
    timestamps: true,
  }
);

const Diary = mongoose.model("Diary", diarySchema);
module.exports = Diary;
