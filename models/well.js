const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wellSchema = new Schema({
  apiNum: { type: String }, // form w1 (top)
  operatorName: { type: String }, // form w1.2
  leaseName: { type: String }, // form w1.4
  wellNum: { type: String }, // form w1.5
  wellName: { type: String },
  isOn: { type: Boolean },
  wellBoreProfile: {
    vertical: Boolean,
    horizontal: Boolean,
    directional: Boolean,
    sidetrack: Boolean
  }, // form w1.7
  trueVerticalDepth: { type: String }, // form w1.10
  districtNum: { type: String }, // form w1.12
  county: { type: String }, // form w1.13
  surfaceLocation: { type: String }, // will get data from a set of radio buttons form w1.14
  latLong: {
    latitude: Number,
    longitude: Number
  }, // form w1 (bottom)
  fieldList: [{ // form w1.28-32
    distNumber: String,
    fieldNumber: String,
    fieldName: String,
    wellType: String,
    completionDepth: String
  }],
  spudDate: { type: Date }, // form w2.12a
  fieldAndReservoir: [{ type: String }], // can have multiple inputs. form w2.13
  testData: {
    testDate: Date,
    hoursTested: Number,
    prodMethod: String,
    chokeSize: String
  }, // form w2.15-18
  totalDepth: { tvd: Number, md: Number, }, // form w2.31
  plugBackDepth: { tvd: Number, md: Number, }, // form w2.32
  casingRecord: [{ // form w2.36
    casingType: String,
    casingSize: Number,
    holeSize: Number,
    cementClass: String,
    cementAmt: Number,
    slurryVol: Number,
    topOfCement: String // I'm not sure about this value
  }],
  tubingRecord: [{ // form w2.38
    size: Number,
    depthSet: Number,
    packerDepthType: String
  }],
  prodInjDispInt: [{ // production/injection/disposal interval
    from: String,
    to: String
  }],
  formationRecord: [{ // form w2.45
    markers: String,
    tvdDepth: Number,
    mdDepth: Number,
    isPermitted: String,
    isIsolated: Boolean
  }],
  tanks: [{
    size: Number, // barrels (bbls)
    bblsPerInch: Number,
    oilDepth: Number,
    waterDepth: Number,
    runTicket: String
  }],
  date: { type: Date, default: Date.now },
  production: [
    {
      type: Schema.Types.ObjectId,
      ref: "Production"
    }
  ],
  report: [
    {
      type: Schema.Types.ObjectId,
      ref: "Report"
    }
  ]


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