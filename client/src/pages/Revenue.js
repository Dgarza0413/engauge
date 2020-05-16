import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import API from "../utils/API";
import moment from 'moment';
import Graph from "../components/Graph/LineRevGraph";
import Card from "../components/Card";
import { Col } from "react-bootstrap";

const styles = {
    graph: {
        "height": "75vh"
    }
}

const Revenue = () => {
    const [oilPrices, setOilPrices] = useState([])
    const [gasPrices, setGasPrices] = useState([])
    const wellData = useState([])
    const currentProd = useState([])
    const gasRev = useState([])

    const getOil = async () => {
        // const obj = { date: date };
        try {
            const res = await API.getOilPrices()
            const data = await res.data.dataset.data
            const oilPrices = await data.map(e => {
                let obj = {}
                obj = {
                    date: moment(e[0], "YYYY-MM-DD").format("MM/DD/YYYY"),
                    price: e[1]
                }
                return obj
            })
            setOilPrices(oilPrices)
        } catch (error) {
            console.error(error)
        }
    }

    const getGas = async () => {
        // const obj = { date: date };
        try {
            const res = await API.getGasPrices()
            const data = await res.data.dataset.data
            const gasPrices = await data.map(e => {
                let obj = {}
                obj = {
                    date: moment(e[0], "YYYY-MM-DD").format("MM/DD/YYYY"),
                    price: e[1]
                }
                return obj
            })
            setGasPrices(gasPrices)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getOil()
        getGas()

        //         API.getAllProdData()
        //             .then(res => {
        //                 const obj = res.data;
        //                 const newObj = [];
        //                 for (let i = 0; i < obj.length; i++) {
        //                     const date = moment(obj[i].date).format("MM/DD/YYYY");
        //                     if (!newObj[date]) {
        //                         newObj[date] =
        //                         {
        //                             date: date,
        //                             water: [],
        //                             oil: [],
        //                             gas: []
        //                         }
        //                         newObj[date].oil.push(obj[i].oil)
        //                         newObj[date].gas.push(obj[i].gas)
        //                         newObj[date].water.push(obj[i].water)
        //                     } else {
        //                         newObj[date].oil.push(obj[i].oil)
        //                         newObj[date].gas.push(obj[i].gas)
        //                         newObj[date].water.push(obj[i].water)
        //                     }
        //                 }
        //                 for (let key in newObj) {
        //                     let gas = newObj[key].gas
        //                     let oil = newObj[key].oil
        //                     let water = newObj[key].water
        //                     let totalGas = gas.reduce((acc, cur) => acc + cur)
        //                     let totalOil = oil.reduce((acc, cur) => acc + cur)
        //                     let totalWater = water.reduce((acc, cur) => acc + cur)
        //                     newObj[key].gas = totalGas
        //                     newObj[key].oil = totalOil
        //                     newObj[key].water = totalWater
        //                 }
        //                 const objValue = Object.values(newObj)
        //                 this.setState({
        //                     wellData: objValue,
        //                     currentProd: objValue[objValue.length - 1],
        //                 })
        //             })
        //             .catch(err => console.log(err))
    }, [])

    return (
        <PageWrapper>
            <SectionTitle>Revenue Page</SectionTitle>
            <Col lg="12">
                <Card>
                    <div style={styles.graph}>
                        <Graph
                            oil={oilPrices}
                            gas={gasPrices}
                        />
                    </div>
                </Card>
            </Col>
        </PageWrapper>
    );
}

export default Revenue;