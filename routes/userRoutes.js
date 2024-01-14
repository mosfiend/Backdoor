const express = require("express");
const router = express.Router();
const { getTrial, setTrial } = require("../controllers/trialController");

router.router("/").post(setTrial).get(getTrial);
// router.get("/", getMe);
// router.get("/", testMe);

module.exports = router;
