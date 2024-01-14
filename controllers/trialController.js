// @desc    Set trial
// @route   POST /api/trials
// @access  Private
const setTrial = asyncHandler(async (req, res) => {

  const trial = await Trial.create({
    text: req.body.text,
    user: req.user.id,

  })
const setTrial = asyncHandler(async (req, res) => {

  const trial = await Trial.create({
    text: req.body.text,
    user: req.user.id,

  })

  res.status(200).json(goal)
})

