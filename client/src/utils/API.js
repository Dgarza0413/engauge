import axios from "axios";

export default {

    testCall: function (value) { console.log(`test call successful ${value}`) },

    // GET - User data -validation
    // getUserInfo: () => { return axios.get('/api/user/me') },

    // GET - All - welldata types
    getAllWellData: () => { return axios.get("/api/well-data"); },
    getAllProdData: () => { return axios.get("/api/prod-data"); },
    getAllReportData: () => { return axios.get("/api/report-data"); },

    // GET - Individual - welldata types
    getWellId: (id) => { return axios.get("/api/well/" + id); },
    getWellProd: (id, wellData) => { return axios.get("/api/welltable/" + id.id + "/prod", wellData); },
    getWellRecomp: (id, wellData) => { return axios.get("/api/welltable/" + id.id + "/recomp", wellData) },
    getWellReport: (id, wellData) => { return axios.get("/api/welltable/" + id.id + "/report", wellData) },

    // POST Individual welldata types
    postWellProd: (id, wellData) => { return axios.post("/api/welltable/" + id + "/prod/new", wellData); },
    postWellReport: (id, wellData) => { return axios.post("/api/welltable/" + id + "/report/new", wellData) },
    postWellRecomp: (id, wellData) => { return axios.post("/api/welltable/" + id.id + "/recomp/new", wellData); },

    // Query Individual welldata
    createWellData: (wellData) => { return axios.post("/api/create-well-data", wellData); },

    // API requests
    getOilPrices: (month) => { return axios.get("/api/getoilprices", month) },
    getGasPrices: (month) => { return axios.get("/api/getgasprices", month) },

    // Update requests
    updateWellData: (id, val) => { return axios.put("/api/well/" + id + "/update", val) },
    updateWellReportData: (id, val) => { return axios.put("/api/well/" + id + "/report/update", val) },
    updateWellStatus: (id, val) => { return axios.put("/api/well/" + id, { isOn: val }) }
};

// QUANDL API
// Parameters (docs: https://docs.quandl.com/docs/parameters-2)
// [limit=] (limit results)
// [start_date=yyyy-mm-dd]
// [send_date=yyyy-mm-dd]
// [collapse=daily, weekly, monthly, quarterly, annual]
// Crude Oil [limit=1 (limit to one result)] [collaps=daily (collapse data to daily average)]
//
// Natural Gas

// date
// open