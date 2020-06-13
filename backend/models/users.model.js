const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postingsSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    location: { type: String },
    postTitle: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", postingsSchema);
