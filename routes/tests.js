const express = require("express");

const {
  testResult,
  getTestResults,
  getUserResult,
  deleteUserResult,
} = require("./../controllers/testController");

const router = express.Router();

router.post("/postResult", testResult);
router.get("/getTests", getTestResults);
router.get("/getUserResult", getUserResult);
router.delete("/deleteUserResult", deleteUserResult);

module.exports = router;
