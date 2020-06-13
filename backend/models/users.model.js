const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

//note: id is linkedin id, _id is the mongoDB query id
const usersSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    email: { type: String },
    location: { type: String },
    introduction: { type: String },
    skills: { type: String },
    ideas: { type: String },
    matching: { type: Object },

    displayName: { type: String },
    picture: { type: Array },
    headline: { type: String },
    interests: { type: Array },
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
