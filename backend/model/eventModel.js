const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    description: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
