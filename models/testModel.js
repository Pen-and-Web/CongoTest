const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please tell us your First Name"],
  },
  testNumber: {
    type: Number,
    required: [true, "Test Number Required"],
  },
  attempt: {
    type: Number,
    required: [true, "Attempt number required"],
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
