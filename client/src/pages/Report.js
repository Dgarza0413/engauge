import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import API from '../utils/API';
import { Col, Row } from "react-bootstrap";
import Pie from "../components/Graph/PieGraphCopy";

import Table from '../components/Table';

const report = () => {
    const [reportData, setReportData] = useState([])
    const [summaryReport, setSummaryReport] = useState([])
    const [summaryCostReport, setSummaryCostReport] = useState([])

    const getAllReportData = async () => {
        try {
            const res = await API.getAllReportData()
            setReportData(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const combineData = async () => {
        try {
            const newObj = [];
            const res = await API.getAllReportData()

            for (var i = 0; i < res.data.length; i++) {
                const name = res.data[i].type
                if (!newObj[name]) {
                    newObj[name] = {
                        id: res.data[i].type || 'no Id',
                        label: res.data[i].type || 'no Id',
                        value: [1],
                        color: 'hsl(323, 70%, 50%)'
                    }
                } else {
                    newObj[name].value.push(1)
                }
            }

            for (let key in newObj) {
                let total = newObj[key].value
                let totalSum = total.reduce((acc, cur) => acc + cur)
                newObj[key].value = totalSum
            }
            setSummaryReport(Object.values(newObj))
        } catch (error) {
            console.error(error)
        }
    }

    const combineCost = async () => {
        try {
            const newObj = [];
            const res = await API.getAllReportData()

            for (var i = 0; i < res.data.length; i++) {
                const name = res.data[i].type
                if (!newObj[name]) {
                    newObj[name] = {
                        id: res.data[i].type || 'no Id',
                        label: res.data[i].type || 'no Id',
                        value: [],
                        color: 'hsl(323, 70%, 50%)'
                    }
                } else {
                    newObj[name].value.push(res.data[i].cost || 0)
                }
            }

            for (let key in newObj) {
                let total = newObj[key].value
                let totalSum = total.reduce((acc, cur) => acc + cur, 0)
                newObj[key].value = totalSum
                console.log(totalSum)
            }
            setSummaryCostReport(Object.values(newObj))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllReportData()
        combineData()
        combineCost()
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
                    <Table data={reportData || []} />
                </Col>
            </Row>
        </PageWrapper>
    )
}
export default report;

