import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import API from "../utils/API";
import moment from 'moment';
import { getOrdinalColorScale } from "@nivo/colors";

class Revenue extends React.Component {
    constructor() {
        super();
        var date = new Date();

        this.state = {
            date: moment(date).format("YYYY-MM"),
            oilPrices: {},
            gasPrices: {}
        }
    }

    getOil = () => {
        const obj = {date: this.state.date};
        console.log("fetching data...");
        API.getOilPrices(obj)
            .then(res => {
                console.log("Oil prices for the month", res.data.dataset.data);
                this.setState({
                    oilPrices: res.data.dataset.data
                })
                // console.log("oil state: ", this.state.oilPrices)
            }).catch(err => {
                console.log(err)
            })
    }

    getGas = () => {
    const obj = {date: this.state.date};
    console.log("fetching data...");
    API.getGasPrices(obj)
        .then(res => {
            console.log("Gas prices for the month", res.data.dataset.data);
            this.setState({
                gasPrices: res.data.dataset.data
            })
            // console.log("gas state: ", this.state.gasPrices)
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        // call APIs on page load
        this.getOil();
        this.getGas();
    }
    
    render() {
        return (
            <PageWrapper>
                <SectionTitle>Revenue Page</SectionTitle>
                <button onClick={this.getOil}>Get Oil</button>
                <button onClick={this.getGas}>Get Gas</button>
            </PageWrapper>
        );
    }
}

export default Revenue;