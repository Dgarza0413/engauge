const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/engauge";
mongoose.connect(MONGODB_URI);

const testUser = {
  email: "test@test.com",
  password: "testtest"
}
// Remove all of our users and then try and make a new one
// User.remove({}).then(() => {
//   User.create(testUser).then(user => {
//       console.log(user)
//       return user.checkPassword(testUser.password)
//   }).then(result => {
//       console.log(result)
//       mongoose.connection.close()
//   })
// })

const userSeed = [
  {
    name: "david",
    email: "david@david.david",
    password: "david",
    username: "david"
  },
  {
    name: "mark",
    email: "mark@mark.mark",
    password: "james",
    username: "zxcv"
  },
  {
    name: "james",
    email: "asdf@james.james",
    password: "james",
    username: "zxcv"
  },
  {
    name: "james",
    email: "asdf@james.james",
    password: "james",
    username: "zxcv"
  },
  {
    name: "james",
    email: "asdf@james.james",
    password: "james",
    username: "zxcv"
  }
];




const wellSeed = {
  apiNum: "TX0123",
  operatorName: "123456",
  leaseName: "Some Lease",
  wellNum: "Well789",
  wellName: "Wellington",
  isOn: true,
  wellBoreProfile: { 
    vertical: true, 
    horizontal: false, 
    directional: true, 
    sidetrack: false 
  }, // form w1.7
  trueVerticalDepth: "100", // form w1.10
  districtNum: "District9", // form w1.12
  county: "Travis", // form w1.13
  surfaceLocation: "land", // will get data from a set of radio buttons form w1.14
  latLong: { latitude: 30.2672, longitude: 97.7431 }, // form w1 (bottom)
  fieldList: [{ // form w1.28-32
    distNumber: "9",
    fieldNumber: "10",
    fieldName: "field",
    wellType: "oil",
    completionDepth: "100"
  }],
  spudDate: "8/5/2019", // form w2.12a
  fieldAndReservoir: ["field"], // can have multiple inputs. form w2.13
  testData: { testDate: "8/5/2019", hoursTested: 8, prodMethod: "jetting", chokeSize: "15" }, // form w2.15-18
  totalDepth: { tvd: 1000, md: 1000,  }, // form w2.31
  plugBackDepth: { tvd: 500, md: 500,  }, // form w2.32
  casingRecord: [{ // form w2.36
    casingType: "surface",
    casingSize: 10,
    holeSize: 20,
    cementClass: "D",
    cementAmt: 20,
    slurryVol: 10,
    topOfCement: "5" // I'm not sure about this value
  }],
  tubingRecord: [{ // form w2.38
    size: 10,
    depthSet: 100,
    packerDepthType: "100"
  }],
  prodInjDispInt: [{ // production/injection/disposal interval
    from: "100",
    to: "200"
  }],
  formationRecord: [{ // form w2.45
    markers: "ground",
    tvdDepth: 100,
    mdDepth: 100,
    isPermitted: "yes",
    isIsolated: true
  }],
  tanks: [{
    size: 400, // barrels (bbls)
    bblsPerInch: 100,
    oilDepth: 200,
    waterDepth: 100,
    runTicket: "run"
  }],
  date: Date.now
}


db.Well
  .deleteMany({})
  .then(() => db.Well.collection.insertOne(wellSeed))
  .then(data => {
    console.log(data.result.n + " records inserted in Well!");

    db.User
      .deleteMany({})
      .then(() => {
        createUser(0, () => {
          console.log(userSeed.length + " records inserted in User!");
          process.exit(0);
        });
      })
      .catch(err => {
        console.error("ERROR: ", err);
        process.exit(1);
      });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  function createUser(i, cb) {
    console.log("adding " + userSeed[i].name)
    db.User.create(userSeed[i])
      .then(() => {
        i++;
        if(i < userSeed.length){
          createUser(i, cb)
        }
        else {
          cb();
        }
      })
      .catch(err => {
        console.error("ERROR: ", err);
        process.exit(1);
      });
  }