import axios from "axios";

export default {
    // GET - User data -validation
    // getUserInfo: () => { return axios.get('/api/user/me') },

    // GET - All - welldata types
    getAllWellData: () => {
        return axios.get("/api/well-data");
    },
    getAllProdData: () => {
        return axios.get("/api/prod-data");
    },
    getAllReportData: () => {
        return axios.get("/api/report-data");
    },

    // GET - Individual - welldata types
    getWellId: (id) => {
        return axios.get("/api/well/" + id);
    },
    getWellProd: (id, wellData) => {
        return axios.get("/api/welltable/" + id.id + "/prod", wellData);
    },
    getWellRecomp: (id, wellData) => {
        return axios.get("/api/welltable/" + id.id + "/recomp", wellData)
    },
    getWellReport: (id, wellData) => {
        return axios.get("/api/welltable/" + id.id + "/report", wellData)
    },
<<<<<<< HEAD

    // POST Individual welldata types
    postWellProd: (id, wellData) => {
        return axios.post("/api/welltable/" + id + "/prod/new", wellData);
    },
    postWellReport: (id, wellData) => {
        return axios.post("/api/welltable/" + id + "/report/new", wellData)
    },
    postWellRecomp: (id, wellData) => {
        return axios.post("/api/welltable/" + id.id + "/recomp/new", wellData);
    },

    // Query Individual welldata
    createWellData: (wellData) => {
        return axios.post("/api/create-well-data", wellData);
    },

    // API requests
    getOil: () => {
        return axios.get('/api/oil')
    },
    getOilPrices: (month) => {
        return axios.get("/api/getoilprices", month)
    },
    getGasPrices: (month) => {
        return axios.get("/api/getgasprices", month)
    },

    // Update requests
    updateWellData: (id, val) => {
        return axios.put("/api/well/" + id + "/update", val)
    },
    updateWellReportData: (id, val) => {
        return axios.put("/api/well/" + id + "/report/update", val)
    },
    updateWellStatus: (id, val) => {
        return axios.put("/api/well/" + id, { isOn: val })
    }
};
=======
    getWellProd: function (id, wellData) {
        console.log(id.id)
        return axios.get("/api/welltable/" + id.id + "/prod", wellData)
    },
    getAllProd: function (wellData) {
        return axios.get("/api/prodAll", wellData)
    },
    // get well data
    getWellId: function (wellId) {
        return axios.get("/api/well/" + wellId)
    // add data to the well
  },
  addToWell: function (id) {
    return axios.post("/api/well/" + id)
  },
  updateWellStatus: function(id, val){
    return axios.put("/api/well/" + id, { isOn: val })
  }
};


// QUANDL API
// Parameters (docs: https://docs.quandl.com/docs/parameters-2)
// [limit=] (limit results)
// [start_date=yyyy-mm-dd]
// [send_date=yyyy-mm-dd]
// [collapse=daily, weekly, monthly, quarterly, annual]
// Crude Oil [limit=1 (limit to one result)] [collaps=daily (collapse data to daily average)]
// http://www.quandl.com/api/v3/datasets/CHRIS/CME_CL1.json?api_key=ekLznknawZDukejxmwxf&collapse=daily&limit=1
//
// Natural Gas
// http://www.quandl.com/api/v3/datasets/CHRIS/CME_NG1.json?api_key=ekLznknawZDukejxmwxf&collapse=daily&limit=1
>>>>>>> ddd360cfe8f3c117f0a5c4de63df74f3ebee13a1
