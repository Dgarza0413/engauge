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
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Slider, { Range } from 'rc-slider';
// import Range from 'rc-slider/lib/Range';
import Tooltip from 'rc-tooltip';

import useCombineValue from '../hooks/useCombineValue';


import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';


// utilities
import API from '../utils/API';


const DashBoard = (props) => {
    const [wellData, setWellData] = useState([]);
    const [prodData, setProdData] = useState([]);
    const [prodTotal, setProdTotal] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [wellStatus, setWellStatus] = useState({});
    const [userVal, setUserVal] = useState("")

    const styles = {
        graph: {
            height: '25vw',
        },
    };

    const loadProfileInfo = async () => {
        try {
            const res = await API.getUserInfo()
            await setUserVal(res)
        } catch (error) {
            console.error(error)
        }
    }

    const getAllWellData = async () => {
        try {
            const res = await API.getAllWellData()
            const data = await res.data
            const isOff = await data.map(status => status.isOn).filter(v => v === false).length
            const isOn = await data.map(status => status.isOn).filter(v => v === true).length

            setWellStatus({
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
            useCombineValue(data, setReportData)

        } catch (error) {
            console.error(error)
        }
    }

    const getAllProdData = async () => {
        try {
            const res = await API.getAllProdData()
            const data = res.data

            const newObj = [];
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

            const totalGas = res.data.map(prodData => prodData.gas).reduce(function (accumulator, prod) {
                return accumulator + prod;
            });

            const totalOil = res.data.map(prodData => prodData.oil).reduce(function (accumulator, prod) {
                return accumulator + prod;
            });
            const totalWater = res.data.map(prodData => prodData.water).reduce(function (accumulator, prod) {
                return accumulator + prod;
            });

            setProdData(Object.values(newObj))
            setProdTotal({
                oil: totalOil,
                gas: totalGas,
                water: totalWater
            })
        } catch (error) {
            console.error(error)
        }
    }

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const Handle = Slider.Handle;
    const { value, dragging, index, ...restProps } = props;

    useEffect(() => {
        // loadProfileInfo(),
        getAllProdData()
        getAllWellData()
        getAllReportData()
    }, [])
    return (
        <PageWrapper>
            <SectionTitle>Dashboard</SectionTitle>
            <Container>
                <Row>
                    <SectionTitle>
                        {/* {this.state.welcomeEmail.length > 0
                ? 'Welcome, ' + this.state.welcomeEmail + '!'
                : ''}{' '} */}
                    </SectionTitle>
                </Row>
                <Row>
                    <DailyProdList data={prodData[prodData.length - 1]} />
                    <Col lg="12">
                        <Card>
                            <SectionTitle>Production</SectionTitle>
                            <div style={styles.graph}>
                                <GraphLine well={prodData || []} />
                                {/* <Tooltip
                                    prefixCls="rc-slider-tooltip"
                                    overlay={value}
                                    visible={dragging}
                                    placement="top"
                                    key={index}
                                > */}
                                <Range
                                    min={0}
                                    max={100}
                                    // value={[0, 50]}
                                    tipFormatter={value => `${value}%`} />
                                {/* </Tooltip> */}
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
                </Row>
                <Row>
                    <Col lg="12">
                        <Card>
                            <SectionTitle>Report Summary</SectionTitle>
                            <div style={styles.graph}>
                                <Calendar data={reportData || []} />
                                {/* <Calendar data={data || []} /> */}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </PageWrapper>
    )
}

export default DashBoard;