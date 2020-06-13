const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    email: String,
    id: Number,
    firstName: String,
    lastName: String,
    picture: String,
  },
  {
    timestamps: true,
  }
).plugin(findOrCreate);
/**
    location: String,
    introduction: String,
    skills: String,
    ideas: String,
 */
module.exports = mongoose.model("users", usersSchema);
