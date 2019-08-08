const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productionSchema = new Schema({
    oil: { type: Number }, // in BBLS (barrels)
    gas: { type: Number }, // in MCF
    water: { type: Number }, // in BBLS (barrels)
    casingPSI: { type: Number }, // in PSI
    tubingPSI: { type: Number }, // in PSI
    choke: { type: Number }, // typically displayed as Number/64
    date: { type: Date, default: Date.now }
});

// Validation coming later

module.exports = mongoose.model("Production", productionSchema);