import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import API from '../utils/API';
import { Col, Row } from "react-bootstrap";
import Pie from "../components/Graph/PieGraphCopy";

import { combineCost, groupReport } from '../utils/computations';

import Table from '../components/Table';

const report = (props) => {
    const [reportData, setReportData] = useState([])
    const [summaryReport, setSummaryReport] = useState([])
    const [summaryCostReport, setSummaryCostReport] = useState([])

    const getAllReportData = async () => {
        try {
            const { data } = await API.getAllReportData()
            setReportData(data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleGroupData = async () => {
        try {
            const { data } = await API.getAllReportData()
            const res = await groupReport(data)
            await setSummaryReport(Object.values(res))
        } catch (error) {
            console.error(error)
        }
    }

    const handleCombineCost = async () => {
        try {
            const { data } = await API.getAllReportData()
            const res = await combineCost(data)
            await setSummaryCostReport(Object.values(res))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllReportData()
        handleGroupData()
        handleCombineCost()
    }, [])

    return (
        <PageWrapper>
            <SectionTitle>Report Page</SectionTitle>
            <Row>
                <Col xs={6}>
                    <Card>
                        <div style={{ height: '300px' }}>
                            <SectionTitle>Report Type</SectionTitle>
                            <Pie reportData={summaryReport || []} />
                        </div>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card>
                        <div style={{ height: '300px' }}>
                            <SectionTitle>Report Cost</SectionTitle>
                            <Pie reportData={summaryCostReport || []} />
                        </div>
                    </Card>
                </Col>
                <Col xs={12}>
                    <Table {...props} data={reportData || []} />
                </Col>
            </Row>
        </PageWrapper>
    )
}
export default report;

