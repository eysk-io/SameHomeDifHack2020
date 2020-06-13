const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

//note: id is linkedin id, _id is the mongoDB query id
const usersSchema = new Schema(
  {
    email: String,
    id: String,
    displayName: String,
    picture: Array,
    headline: String,
    interests: Array,
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
