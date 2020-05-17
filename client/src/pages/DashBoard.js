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
import FlexContainer from '../components/FlexContainer';
import SummarizedCard from '../components/Card/SummarizedCard';
import { Container, Row, Col } from 'react-bootstrap';

// utilities
import API from '../utils/API';


const DashBoard = () => {
    const [wellData, setWellData] = useState([]);
    const [prodData, setProdData] = useState([]);
    const [prodTotal, setProdTotal] = useState([]);
    const [currentProdData, setCurrentProdData] = useState([]);
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
            const res = await API.getAllReportData()
            const data = res.data
            const newObj = [];

            for (var i = 0; i < data.length; i++) {
                const day = moment(data[i].date).format('YYYY-MM-DD');
                if (!newObj[day]) {
                    newObj[day] = {
                        day: day,
                        value: []
                    }
                    newObj[day].value.push(1)
                } else {
                    newObj[day].value.push(1)
                }
            }

            for (let key in newObj) {
                let value = newObj[key].value
                let day = newObj[key].day
                let totalValue = value.reduce((acc, cur) => acc + cur);
                newObj[key].day = day;
                newObj[key].value = totalValue;
            }

            setReportData(Object.values(newObj))
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
                    <Col md="4">
                        <Card>
                            <FlexContainer>
                                {/* <SectionTitle mb="5px">{this.state.currentProd.oil} BBLs</SectionTitle> */}
                                <p style={{ marginBottom: "5px" }}><strong>+0.20%</strong></p>
                            </FlexContainer>
                            <h6 className="mb-0">Oil Production</h6>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <FlexContainer>
                                {/* <SectionTitle mb="5px">{this.state.currentProd.gas} MCF</SectionTitle> */}
                                <p style={{ marginBottom: '5px' }}>
                                    <strong>+0.20%</strong>
                                </p>
                            </FlexContainer>
                            <h6 className="mb-0">Gas Production</h6>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <FlexContainer>
                                {/* <SectionTitle mb="5px">{this.state.currentProd.water} BBLs</SectionTitle> */}
                                <p style={{ marginBottom: '5px' }}>
                                    <strong>+0.20%</strong>
                                </p>
                            </FlexContainer>
                            <h6 className="mb-0">Water Production</h6>
                        </Card>
                    </Col>
                    <Col lg="12">
                        <Card>
                            <SectionTitle>Production</SectionTitle>
                            <div style={styles.graph}>
                                <GraphLine well={prodData || []} />
                            </div>
                            {/* <Slider
                                // value={value}
                                // onChange={handleChange}
                                // valueLabelDisplay="auto"
                                // aria-labelledby="range-slider"
                            // getAriaValueText={valuetext}
                            // /> */}
                            {/* <Typography id="range-slider" gutterBottom>Date range</Typography> */}
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
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </PageWrapper>
    )
}

export default DashBoard;