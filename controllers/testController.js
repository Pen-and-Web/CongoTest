const Test = require("../models/testModel");

const getTestResults = async (req, res) => {
  try {
    const tests = await Test.find();
    console.log(tests);

    res.status(200).json(tests);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserResult = async (req, res) => {
  try {
    let userId = req.query.userId;
    const tests = await Test.find({ userId: userId });
    res.status(200).json(tests);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUserResult = async (req, res) => {
  try {
    let userId = req.query.userId;
    await Test.deleteMany({ userId: userId });
    res.json({ message: "Tests Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const testResult = async (req, res) => {
  const {
    userId,
    testNumber,
    attempt,
    accuracy,
    minutes,
    seconds,
    wrong,
    correct,
  } = req.body;

  const newTestResult = new Test({
    userId,
    testNumber,
    attempt,
    accuracy,
    minutes,
    seconds,
    wrong,
    correct,
  });

  try {
    await newTestResult.save();
    console.log("Test Result Posted");
    return res.status(200).json(newTestResult);
  } catch (error) {
    return res.status(400).json({ message: "Test Result not posted." });
  }
};

module.exports = {
  testResult,
  getTestResults,
  getUserResult,
  deleteUserResult,
};
