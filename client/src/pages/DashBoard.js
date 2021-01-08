import React, { useState, useEffect } from 'react';
import moment from 'moment';

// Components
import Calendar from '../components/Graph/CalendarGraph';
import GraphLine from '../components/Graph/Line';
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
import useFetch from '../hooks/useFetch';

// utilities
import API from '../utils/API';
import URI from '../utils/URI';
import { combineProduction, combineReport } from '../utils/computations';


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
            height: '30vw',
        },
    };

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
                    {/* <DailyProdList data={prodData[prodData.length - 1]} /> */}
                    <Col lg="12">
                        <Card>
                            {/* <SectionTitle>Production</SectionTitle> */}
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