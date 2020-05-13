const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recompletionSchema = new Schema({
    // begin form W-2
    spudDate: { type: Date }, // form w2.12a
    fieldAndReservoir: [{ type: String }], // can have multiple inputs. form w2.13
    testData: {
        testDate: Date,
        hoursTested: Number,
        prodMethod: String,
        chokeSize: String
    }, // form w2.15-18
    totalDepth: {
        tvdTD: Number,
        mdTD: Number,
    }, // form w2.31
    plugBackDepth: {
        tvdPBD: Number,
        mdPBD: Number,
    }, // form w2.32
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
        packerType: String,
        packerDepth: Number
    }],
    prodInjDispInt: [{ // production/injection/disposal interval
        from: String,
        to: String
    }],
    formationRecord: [{ // form w2.45
        markers: String,
        tvdDepth: Number,
        mdDepth: Number,
        formationType: String,
        isIsolated: Boolean
    }],
    // tanks: [{
    //   size: Number, // barrels (bbls)
    //   bblsPerInch: Number,
    //   oilDepth: Number,
    //   waterDepth: Number,
    //   runTicket: String
    // }],
    date: {
        type: Date, default: Date.now
    }
});

module.exports = mongoose.model("Recompletion", recompletionSchema);