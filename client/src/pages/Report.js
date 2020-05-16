import React, { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import CalendarGraph from "../components/Graph/CalendarGraph";
import API from '../utils/API';
import ReportList from "../components/Lists/ReportList";

import moment from 'moment';

const report = () => {
    const [reportData, setReportData] = useState([])

    console.log(reportData)
    const getAllReportData = async () => {
        try {

            const res = await API.getAllReportData()
            setReportData(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    const filterReportData = () => {
        const newObj = []
        // console.log(reportData)
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