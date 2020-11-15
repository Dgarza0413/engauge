const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wellSchema = new Schema({
    wellName: { type: String },
    wellNum: { type: String }, // form w1.5
    wellType: { type: String },
    apiNum: { type: String }, // form w1 (top)
    operator: { type: String, default: "" }, // form w1.2
    leaseName: { type: String }, // form w1.4
    county: { type: String }, // form w1.13
    fieldList: { // form w1.28-32
        distNumber: String,
        fieldNumber: String,
        fieldName: String
    },
    latLong: {
        latitude: Number,
        longitude: Number
    }, // form w1 (bottom)
    completionDepth: { type: String }, // formerly part of fieldList
    trueVerticalDepth: { type: String }, // form w1.10
    wellBoreProfile: { type: String }, // form w1.7
    surfaceLocation: { type: String }, // will get data from a set of radio buttons form w1.14
    // end form W-1
    // isOn: { type: Boolean, default: false },
    isOn: [{
        type: Schema.Types.ObjectId,
        ref: 'Downtime'
    }],
    date: {
        type: Date, default: new Date
    },
    productionId: [{
        type: Schema.Types.ObjectId,
        ref: "Production"
    }],
    reportId: [{
        type: Schema.Types.ObjectId,
        ref: "Report"
    }],
    recompletionId: [{
        type: Schema.Types.ObjectId,
        ref: "Recompletion"
    }]
});

module.exports = mongoose.model("Well", wellSchema);

// Well Collection
// API Number
// Operator Name
// Well No
// Lease Name
// Wellbore Profile (checkbox (4 options))
// True Vertical Depth
// RRC Distric Number
// County
// Surface Location (Radio Button (4 options))
// WGS84 Lat/Long (sub-object)
// List of fields of anticipated completion
//   -RRC Distric Numner
//   -Field Number
//   -Field Name
//   -Well Type
//   -Completion Depth