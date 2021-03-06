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
        return axios.get("/api/report");
    },
    getWellAllRecompletionData: () => {
        return axios.get("/api/recompletion");
    },

    // "/api/band/:name

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

    //GET - Individual report
    getSingleReport: (id) => {
        return axios.get(`/api/report/${id}`)
    },
    // "Q8_Picd23"
    updateSingleReport: (id, data) => {
        console.log(data)
        console.log(id)
        return axios.put(`/api/report/${id}`, data)
    },

    // POST Individual welldata types
    postWellProd: (id, wellData) => {
        return axios.post("/api/welltable/" + id + "/prod/new", wellData);
    },
    postWellReport: (id, wellData) => {
        return axios.post("/api/welltable/" + id + "/report/new", wellData)
    },
    postWellRecomp: (id, data) => {
        return axios.post("/api/welltable/" + id.id + "/recomp/new", data);
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
