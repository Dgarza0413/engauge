import React, { useState, useEffect } from 'react';
import moment from 'moment';

// Components
import Calendar from '../components/Graph/CalendarGraph';
import GraphLine from '../components/Graph/LineGraph';
import GraphPie from '../components/Graph/PieGraph';
import GraphBar from '../components/Graph/BarGraph';
import PageWrapper from '../components/PageWrapper';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import DailyProdList from '../components/Lists/DailyProdList';
// import MapBox from '../components/Map';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// hooks
import useCombineValue from '../hooks/useCombineValue';
import useFetch from '../hooks/useFetch';

// utilities
import API from '../utils/API';
import URL from '../utils/URL';


const DashBoard = (props) => {
    const [prodData, setProdData] = useState([]);
    const [prodTotal, setProdTotal] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [wellStatus, setWellStatus] = useState({});
    // const [wellData, setWellData] = useState([]);
    // const [userVal, setUserVal] = useState("")
    // const [filteredValues, setFilteredValues] = useState([]);
    const [handleURI] = useFetch();

    const styles = {
        graph: {
            height: '25vw',
        },
    };

    console.log(URL.allWell_URI())

    // const loadProfileInfo = async () => {
    //     try {
    //         const res = await API.getUserInfo()
    //         await setUserVal(res)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    const getAllWellData = async () => {
        try {
            const { data } = await API.getAllWellData()
            const isOff = await data.map(status => status.isOn).filter(v => v === false).length
            const isOn = await data.map(status => status.isOn).filter(v => v === true).length
            await setWellStatus({
                isOff: isOff,
                isOn: isOn
            })
        } catch (error) {
            console.error(error)
        }
    }

    const getAllReportData = async () => {
        try {
            const { data } = await API.getAllReportData()
            await useCombineValue(data, setReportData)
        } catch (error) {
            console.error(error)
        }
    }

    const getAllProdData = async () => {
        try {
            const newObj = [];
            const { data } = await API.getAllProdData()
            for (let i = 0; i < data.length; i++) {
                const date = moment(data[i].date).format('MM/DD/YYYY');
                if (!newObj[date]) {
                    newObj[date] = {
                        date: date,
                        water: [],
                        oil: [],
                        gas: [],
                    };
                    newObj[date].oil.push(data[i].oil);
                    newObj[date].gas.push(data[i].gas);
                    newObj[date].water.push(data[i].water);
                } else {
                    newObj[date].oil.push(data[i].oil);
                    newObj[date].gas.push(data[i].gas);
                    newObj[date].water.push(data[i].water);
                }
            }
            for (let key in newObj) {
                let gas = newObj[key].gas;
                let oil = newObj[key].oil;
                let water = newObj[key].water;
                let totalGas = gas.reduce((acc, cur) => acc + cur);
                let totalOil = oil.reduce((acc, cur) => acc + cur);
                let totalWater = water.reduce((acc, cur) => acc + cur);
                newObj[key].gas = totalGas;
                newObj[key].oil = totalOil;
                newObj[key].water = totalWater;
            }

            const totalGas = data
                .map(prodData => prodData.gas)
                .reduce(function (accumulator, prod) {
                    return accumulator + prod;
                });
            const totalOil = data
                .map(prodData => prodData.oil)
                .reduce(function (accumulator, prod) {
                    return accumulator + prod;
                });
            const totalWater = data
                .map(prodData => prodData.water)
                .reduce(function (accumulator, prod) {
                    return accumulator + prod;
                });

            await setProdData(Object.values(newObj))
            await setProdTotal({
                oil: totalOil,
                gas: totalGas,
                water: totalWater
            })
        } catch (error) {
            console.error(error)
        }
    }

    // const filterRange = async () => {
    //     const max = await moment.utc(prodData[prodData.length - 1].date)
    //     const min = await moment.utc(prodData[prodData.length - (prodData.length - 1)].date)
    //     const increment = await max.add(24, 'hours').valueOf()
    //     const filterDates = await prodData.filter(e => {
    //         return e.date >= min && e.date <= max
    //     })
    //     console.log(filterDates)
    //     await setFilteredValues({
    //         min: min.valueOf(),
    //         max: max.valueOf()
    //     })
    // }

    useEffect(() => {
        // loadProfileInfo(),
        getAllProdData()
        getAllWellData()
        getAllReportData()
    }, [])

    // const createSliderWithTooltip = Slider.createSliderWithTooltip;
    // const Range = createSliderWithTooltip(Slider.Range);

    return (
        <PageWrapper>
            <SectionTitle>Dashboard</SectionTitle>
            <Container>
                <Row>
                    <DailyProdList data={prodData[prodData.length - 1]} />
                    <Col lg="12">
                        <Card>
                            <SectionTitle>Production</SectionTitle>
                            <div style={styles.graph}>
                                <GraphLine well={prodData || []} />
                            </div>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <SectionTitle>Well Status</SectionTitle>
                            <GraphPie
                                wellStatus={wellStatus || {}}
                                class="half-pie"
                            />
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <SectionTitle>Prod Summary</SectionTitle>
                            <GraphBar
                                class="half-pie"
                                oil={prodTotal.oil}
                                gas={prodTotal.gas}
                                water={prodTotal.water}
                            //   key={tprodTotal.oil}
                            />
                        </Card>
                    </Col>
                    <Col lg="12">
                        <Card>
                            <SectionTitle>Report Summary</SectionTitle>
                            <div style={styles.graph}>
                                <Calendar data={reportData || []} />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </PageWrapper>
    )
}

export default DashBoard;