import React from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import API from "../utils/API";
import moment from 'moment';
import GraphLine2 from "../components/GraphLineRev";
import Card from "../components/Card";
import { Col } from "react-bootstrap";


const styles = {
    graph: {
        "height": "75vh"
    }
}

class Revenue extends React.Component {
    // constructor() {
    //     super();
    // var date = new Date();

    state = {
        // date: moment(date).format("YYYY-MM"),
        oilPrices: [],
        gasPrices: [],
        wellData: [],
        currentProd: [],
        gasRev: []
    }
    // }

    getOil = () => {
        const obj = { date: this.state.date };
        API.getOilPrices(obj)
            .then(res => {
                const newObj = {}
                const data = res.data.dataset.data
                for (let i = 0; i < data.length; i++) {
                    if (!newObj[data[i][0]]) {
                        newObj[data[i][0]] = {
                            date: moment(data[i][0], "YYYY-MM-DD").format("MM/DD/YYYY"),
                            priceOil: data[i][1]
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
                            date: moment(data[i][0], "YYYY-MM-DD").format("MM/DD/YYYY"),
                            priceGas: data[i][1]
                        }
                    }
                }
                const newObj3 = []
                this.state.wellData.forEach((itm, i) => {
                    newObj3.push(Object.assign({}, itm, this.state.gasPrices[i]));
                })
                console.log(res.data)
                this.setState({
                    gasPrices: Object.values(newObj),
                    gasRev: Object.values(newObj3)
                })
                // const newObj3 = []
                // this.state.wellData.forEach((itm, i) => {
                //     newObj3.push(Object.assign({}, itm, this.state.gasPrices[i]));
                // })
                // console.log(Object.values(newObj3))
                console.log(this.state.gasPrices)
                console.log(this.state.gasRev)
                // console.log(this.state.wellData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        // call APIs on page load
        this.getOil();
        this.getGas();
        API.getAllProd()
            .then(res => {
                const obj = res.data;
                const newObj = [];
                for (let i = 0; i < obj.length; i++) {
                    const date = moment(obj[i].date).format("MM/DD/YYYY");
                    if (!newObj[date]) {
                        newObj[date] =
                            {
                                date: date,
                                water: [],
                                oil: [],
                                gas: []
                            }
                        newObj[date].oil.push(obj[i].oil)
                        newObj[date].gas.push(obj[i].gas)
                        newObj[date].water.push(obj[i].water)
                    } else {
                        newObj[date].oil.push(obj[i].oil)
                        newObj[date].gas.push(obj[i].gas)
                        newObj[date].water.push(obj[i].water)
                    }
                }
                for (let key in newObj) {
                    let gas = newObj[key].gas
                    let oil = newObj[key].oil
                    let water = newObj[key].water
                    let totalGas = gas.reduce((acc, cur) => acc + cur)
                    let totalOil = oil.reduce((acc, cur) => acc + cur)
                    let totalWater = water.reduce((acc, cur) => acc + cur)
                    newObj[key].gas = totalGas
                    newObj[key].oil = totalOil
                    newObj[key].water = totalWater
                }
                const objValue = Object.values(newObj)
                this.setState({
                    wellData: objValue,
                    currentProd: objValue[objValue.length - 1],
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <PageWrapper>
                <SectionTitle>Revenue Page</SectionTitle>
                <Col lg="12">
                    <Card >
                        <div style={styles.graph}>
                            <GraphLine2
                                oilPrice={this.state.oilPrices}
                                gasPrice={this.state.gasPrices}
                                gasRev={this.state.gasRev}
                            />
                        </div>
                    </Card>
                </Col>
            </PageWrapper>
        );
    }
}

export default Revenue;