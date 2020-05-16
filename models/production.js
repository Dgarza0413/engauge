const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productionSchema = new Schema({
    oil: {
        type: Number,
        default: 0
    },
    gas: {
        type: Number,
        default: 0
    },
    water: {
        type: Number,
        default: 0
    },
    casingPSI: {
        type: Number,
        default: 0
    },
    tubingPSI: {
        type: Number,
        default: 0
    },
    choke: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Validation coming later

module.exports = mongoose.model("Production", productionSchema);