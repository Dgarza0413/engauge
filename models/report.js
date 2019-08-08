const mongoose = require("mongoose");

// **Schema**
//==========

// Notes:
// Define basic data structure
const reportSchema = new mongoose.Schema({
    detail: String,
    supervisor: String,
    date: Date,
    cost: Number
});

module.exports = mongoose.model("Report", reportSchema);