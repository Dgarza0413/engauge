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