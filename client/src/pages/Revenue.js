import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import API from "../utils/API";
import moment from 'moment';
import { getOrdinalColorScale } from "@nivo/colors";
import GraphLine2 from "../components/GraphLineRev";
import Card from "../components/Card";
import { Col } from "react-bootstrap";


const styles = {
    graph: {
        "height": "75vh"
    }
}

class Revenue extends React.Component {
    constructor() {
        super();
        var date = new Date();

        this.state = {
            date: moment(date).format("YYYY-MM"),
            oilPrices: [],
            gasPrices: []
        }
    }

    getOil = () => {
        const obj = { date: this.state.date };
        console.log("fetching data...");
        API.getOilPrices(obj)
            .then(res => {
                const newObj = {}
                const data = res.data.dataset.data
                for (let i = 0; i < data.length; i++) {
                    if (!newObj[data[i][0]]) {
                        newObj[data[i][0]] = {
                            date: data[i][0],
                            price: data[i][1]
                        }
                    }
                }
                this.setState({
                    oilPrices: Object.values(newObj)
                })
            }).catch(err => {
                console.log(err)
            })
    }

    getGas = () => {
        const obj = { date: this.state.date };
        API.getGasPrices(obj)
            .then(res => {
                const newObj = {}
                const data = res.data.dataset.data
                for (let i = 0; i < data.length; i++) {
                    if (!newObj[data[i][0]]) {
                        newObj[data[i][0]] = {
                            date: data[i][0],
                            price: data[i][1]
                        }
                    }
                }
                this.setState({
                    gasPrices: Object.values(newObj)
                })
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
                <Col lg="12">
                    <Card >
                        <div style={styles.graph}>
                            <GraphLine2
                                oilPrice={this.state.oilPrices}
                                gasPrice={this.state.gasPrices}
                            />
                        </div>
                    </Card>
                </Col>
            </PageWrapper>
        );
    }
}

export default Revenue;