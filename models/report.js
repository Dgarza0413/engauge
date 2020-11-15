const mongoose = require("mongoose");
const shortid = require('shortid');

// **Schema**
//==========

const reportSchema = new mongoose.Schema({
    wellId: {
        type: String,
        required: true
    },
    reportId: {
        type: String,
        default: () => shortid.generate(),
        required: true
    },
    title: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: ""
    },
    supervisor: {
        type: String,
        default: ""
    },
    cost: {
        type: Number,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now()
    },
    summary: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model("Report", reportSchema);