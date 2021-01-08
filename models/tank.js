const mongoose = require('mongoose');
const Schema = mongoose.Schema

const tankSchema = new Schema({
    tankId: {
        type: String,
        default: ''
    },
    unitMeasurement: {
        type: String,
        default: '',
    },
    tickets: [{
        type: String,
        default: ''
    }],
    measurements: [{
        feet: {
            type: Number
        },
        inches: {
            type: Number
        }
    }]
})

module.exports = mongoose.model("Tank", tankSchema);