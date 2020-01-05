const mongoose = require("mongoose");

// **Schema**
//==========

// Notes:
// Define basic data structure
const reportSchema = new mongoose.Schema({
    title: String,
    type: String,
    summary: String,
    supervisor: String,
    cost: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Report", reportSchema);