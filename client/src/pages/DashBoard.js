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

<<<<<<< HEAD
class DashBoard extends React.Component {
    state = {
        well: [],
        wellData: [],
        prodData: {},
        prodOil: {},
        prodGas: {},
        isOnTotal: {},
        isOffTotal: {},
        totalOil: {},
        totalGas: {},
        totalWater: {},
        welcomeEmail: "",
        currentProd: {},
        currentRate: {}
    };
    wellDataAdder = (wells) => {
        this.setState({ well: wells })
=======
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
>>>>>>> 842c7e8a6948f1e7a987a25e8757b47ad7a5626c

// hooks
import useCombineValue from '../hooks/useCombineValue';
import useFetch from '../hooks/useFetch';

// utilities
import API from '../utils/API';
import URI from '../utils/URI';
import { combineProduction, combineReport } from '../utils/computations';

<<<<<<< HEAD
    componentDidMount() {
        this.loadProfileInfo()
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
                console.log(Object.values(newObj))
                console.log(res.data[0])

                const totalGas = res.data.map(prodData => prodData.gas).reduce(function (accumulator, prod) { return accumulator + prod })
                const totalOil = res.data.map(prodData => prodData.oil).reduce(function (accumulator, prod) { return accumulator + prod })
                const totalWater = res.data.map(prodData => prodData.water).reduce(function (accumulator, prod) { return accumulator + prod })
                const currentRateOil = (res.data[res.data.length - 1].oil - res.data[res.data.length - 2].oil) / 100
                const currentProd = res.data[res.data.length - 1]

                const objValue = Object.values(newObj)
                this.setState({
                    wellData: objValue,
                    totalGas: totalGas,
                    totalOil: totalOil,
                    totalWater: totalWater,
                    currentProd: currentProd,
                    currentRateOil: currentRateOil.toFixed(2)
                })
                console.log(this.state.wellData)
            })
            .catch(err => console.log(err))
=======

const DashBoard = (props) => {
    const [prodData, setProdData] = useState([]);
    const [prodTotal, setProdTotal] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [wellStatus, setWellStatus] = useState({});
    // const [wellData, setWellData] = useState([]);
    // const [userVal, setUserVal] = useState("")
    // const [filteredValues, setFilteredValues] = useState([]);
    const [value, handleFetchGET, handleManyFetchGET] = useFetch();
    // const [valueCombine, handleCombineProd] = useCombineValue();

    const styles = {
        graph: {
            height: '25vw',
        },
    };
>>>>>>> 842c7e8a6948f1e7a987a25e8757b47ad7a5626c

    // const loadProfileInfo = async () => {
    //     try {
    //         const res = await API.getUserInfo()
    //         await setUserVal(res)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    const getAllReportData = async () => {
        try {
            const { data } = await API.getAllReportData()
            const reportRes = await combineReport(data)
            await setReportData(Object.values(reportRes))
        } catch (error) {
            console.error(error)
        }
    }

<<<<<<< HEAD
    render() {
        return (
            <PageWrapper>
                <Container>
                    <Row>
                        <SectionTitle>
                            {this.state.welcomeEmail.length > 0
                                ? "Welcome, " + this.state.welcomeEmail + "!"
                                : ""}
                        </SectionTitle>
                    </Row>
                    <Row>
                        < Col md="4" >
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">{this.state.currentProd.oil} BBLs</SectionTitle>
                                    <p style={{ marginBottom: "5px" }}><strong>{this.state.currentRateOil}%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Oil Production</h6>
                            </Card>
                        </Col >
                        <Col md="4">
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">{this.state.currentProd.oil} MCF</SectionTitle>
                                    <p style={{ marginBottom: "5px" }}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Gas Production</h6>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">{this.state.currentProd.water} BBLs</SectionTitle>
                                    <p style={{ marginBottom: "5px" }}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Water Production</h6>
                            </Card>
                        </Col>
                        <Col lg="12">
                            <Card>
                                <SectionTitle>Production</SectionTitle>
                                <div style={styles.graph}>
                                    <GraphLine well={this.state.wellData || []} />
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Well Status</SectionTitle>
                                <GraphPie wellIsOn={this.state.isOnTotal}
                                    wellIsOff={this.state.isOffTotal} class="half-pie" />
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Prod Summary</SectionTitle>
                                <GraphBar class="half-pie"
                                    oil={this.state.totalOil}
                                    gas={this.state.totalGas}
                                    water={this.state.totalWater}
                                    key={this.state.wellData.id} />
                            </Card>
                        </Col>
                    </Row >
                </Container >
            </PageWrapper >
        )
=======
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

    const getAllProdData = async () => {
        try {
            const { data } = await API.getAllProdData()
            const res = await combineProduction(data)
            await setProdData(Object.values(res.newObj))
            await setProdTotal({
                oil: res.totalOil,
                gas: res.totalGas,
                water: res.totalWater
            })
        } catch (error) {
            console.error(error)
        }
>>>>>>> 842c7e8a6948f1e7a987a25e8757b47ad7a5626c
    }

    useEffect(() => {
        handleFetchGET('/api/report')
        getAllReportData()
        // loadProfileInfo(),
        getAllProdData()
        getAllWellData()
    }, [])

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