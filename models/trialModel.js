const mongoose = require("mongoose");

const trialSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    tries: {
      type: Number,
      required: true,
    },
    trials: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Trial", goalSchema);
