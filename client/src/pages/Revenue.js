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
    // const wellData = useState([])
    // const currentProd = useState([])
    // const gasRev = useState([])

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