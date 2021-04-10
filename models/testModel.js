const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User Id required."],
  },
  testName: {
    type: String,
    required: [true, "Test Name Required"],
  },
  attempt: {
    type: Number,
    required: [false, "Attempt number required"],
  },
  accuracy: {
    type: Number,
    required: [true, "Accuracy required"],
  },
  minutes: {
    type: Number,
    required: [true, "Minutes Required"],
  },
  seconds: {
    type: Number,
    required: [true, "Seconds Required"],
  },
  wrong: {
    type: Number,
    required: [true, "Wrong Required"],
  },
  correct: {
    type: Number,
    required: [true, "Correct Required"],
  },
});

const Test = mongoose.model("tests", TestSchema);
module.exports = Test;
