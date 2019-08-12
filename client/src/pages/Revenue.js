import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import API from "../utils/API";

function getOil() {
    API.getOilPrices()
        .then(res => {
            console.log("Oil prices for the month");
            console.log(res.data.dataset.data);
        })
}
getOil()

function getGas() {
    API.getGasPrices()
        .then(res => {
            console.log("Gas prices for the month");
            console.log(res.data.dataset.data);
        })
}
getGas()

function Revenue(props) {
    return (
        <PageWrapper>
            <SectionTitle>Revenue Page</SectionTitle>
            
        </PageWrapper>
    );
}

export default Revenue;