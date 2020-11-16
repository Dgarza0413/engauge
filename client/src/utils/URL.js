export default {
    allWell_URI: () => "/api/well",
    allReport_URI: () => "/api/report",
    allProduction_URI: () => "/api/production",
    allRecompletion_URI: () => "/api/recompletion",
    well_URI: (id) => `/api/well/${id}`,
    wellReport_URI: (id) => `/api/well/${id}/report`,
    wellProduction_URI: (id) => `/api/well/${id}/prod`,
    wellRecompletion_URI: (id) => `/api/well/${id}/recomp`,
    updateWell_URI: (id) => `/api/well/${id}/update`,
    updateWellReport_URI: (id) => `/api/well/${id}/report/update`,
    createData_URI: () => '/api/createdata',
    oilPrices_URI: () => `/api/oilprices`,
    gasPrices_URI: () => `/api/gasprices`,
    user_URI: () => `/api/user/me`
}