const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    email: { type: String },
    location: { type: String },
    introduction: { type: String },
    skills: { type: String },
    ideas: { type: String },
    matching: { type: Object },

    displayName: { type: String },
    picture: { type: String },
    headline: {type: String },
    interests: { type: Array },
  },
  {
    timestamps: true,
  }
).plugin(findOrCreate);

module.exports = mongoose.model("users", usersSchema);
