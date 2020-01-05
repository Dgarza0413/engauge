import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import CalendarGraph from "../components/Graph/CalendarGraph";
import API from '../utils/API';
import ReportList from "../components/Lists/ReportList";

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

    useEffect(() => {
        getAllReportData()
    }, [])

    return (
        <PageWrapper>
            <h1>This is the wellReport</h1>
            <h2>Amount of reports: {reportData.length}</h2>
            <div>

                <CalendarGraph />
                <ReportList reportData={reportData || []} />
            </div>
        </PageWrapper>
    )
}

export default report