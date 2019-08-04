const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { String, required: true },
  email: { String, required: true },
  password: { String, required: true },
  date: { type: Date, default: Date.now }
});

// Validation coming later

module.exports =  mongoose.model("Users", usersSchema);