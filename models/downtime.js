const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const downTimeSchema = new Schema({
    currentStatus: {
        type: Boolean,
        default: false
    },
    lastOn: {
        type: Date,
        default: new Date
    },
    lastOff: {
        type: Date,
        default: new Date
    }
})

module.exports = mongoose.model("Downtime", downTimeSchema);