const mongoose = require("mongoose");
const shortid = require('shortid');

// **Schema**
//==========

const reportSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date
    },
    api: {
        type: String,
        required: true
    },
    reportId: {
        type: String,
        default: () => shortid.generate(),
        unique: true
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

    summary: {
        type: String,
        default: ""
    },
});

module.exports = mongoose.model("Report", reportSchema);