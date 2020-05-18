import React, { useState, useEffect } from "react";

import PageWrapper from "../components/PageWrapper";
import CalendarGraph from "../components/Graph/CalendarGraph";

import API from '../utils/API';
import ReportTable from "../components/Table/ReportTable";
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';

import { Col, Row } from "react-bootstrap";

const report = () => {
    const [reportData, setReportData] = useState([])

    const getAllReportData = async () => {
        try {
            const res = await API.getAllReportData()
            setReportData(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const filterReportData = async () => {
        const newObj = []
        console.log(reportData)
        // for (var i = 0; i < reportData.length; i++) {
        // const day = moment(reportData[i].date).format('YYYY-MM-DD');
        // if (newObj[day] === null){
        // console.log('null has been encountered')
        // if(err) {throw err}
        // }
        // console.log(day)
        // if (!newObj[day] && newObj[day] !== null) {
        //     newObj[day] = {
        //         day: day,
        //         value: []
        //     }
        //     newObj[day].value.push(1)
        // }
        // else {
        // newObj[day].value.push(1)
        // }
        // console.log(newObj)
        // }
    }


    useEffect(() => {
        getAllReportData()
        filterReportData()
    }, [])

    return (
        <PageWrapper>
            <SectionTitle>Report Page</SectionTitle>
            <Row>
                <Col xs={7}>
                    <Card>
                        <div style={{ height: '175px' }}>
                            <CalendarGraph data={reportData || []} />
                        </div>
                    </Card>
                </Col>
                <Col xs={5}>
                    <Card>
                        <div style={{ height: '175px' }}>
                            <CalendarGraph data={reportData || []} />
                        </div>
                    </Card>
                </Col>
                <Col xs={12}>
                    <ReportTable reportData={reportData || []} />
                </Col>
            </Row>
        </PageWrapper>
    )
}
export default report;

