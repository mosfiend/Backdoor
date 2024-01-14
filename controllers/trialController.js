const asyncHandler = require("express-async-handler");
const Trial = require("../models/trialModel"); // @desc    Set trial

// @route   POST /api/trials
// @access  Private
const setTrial = asyncHandler(async (req, res) => {
  const trial = await Trial.create({
    text: req.body.text,
    user: req.user.id,
  });
});

const getTrial = asyncHandler(async (req, res) => {
  const trial = await Trial.create({
    user: "mostafa",
    tries: 1,
    trials: ["num"],
  });

  res.status(200).json(trial);
});
