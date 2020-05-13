const mongoose = require("mongoose");

// **Schema**
//==========

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: ""
    },
    summary: {
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
    }
});

module.exports = mongoose.model("Report", reportSchema);