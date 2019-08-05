const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  date: { type: Date, default: Date.now }
});

// Validation coming later

module.exports =  mongoose.model("Users", usersSchema);