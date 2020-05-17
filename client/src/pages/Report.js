import React, { useState, useEffect } from "react";

import PageWrapper from "../components/PageWrapper";
import CalendarGraph from "../components/Graph/CalendarGraph";
import ReportList from "../components/Lists/ReportList";

import API from '../utils/API';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const report = () => {
    const [reportData, setReportData] = useState([])

    console.log(reportData)


    const useRowStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'unset',
            },
        },
    });

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

    const Row = ({ props }) => {
        const { cost, date, summary, supervisor, title, type } = props
        const [open, setOpen] = useState(false);

        console.log(props)
        console.log(title)

        return (
            <>
                <TableRow className={classes.root}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">{title}</TableCell>
                    <TableCell align="right">{type}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    History
      </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total price ($)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* {row.history.map((historyRow) => (
                                            <TableRow key={historyRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </TableCell>
                                                <TableCell>{historyRow.customerId}</TableCell>
                                                <TableCell align="right">{historyRow.amount}</TableCell>
                                                <TableCell align="right">
                                                    {Math.round(historyRow.amount * row.price * 100) / 100}
                                                </TableCell>
                                            </TableRow>
                                        ))} */}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </>
        )
    }


    useEffect(() => {
        getAllReportData()
        filterReportData()
    }, [])

    const classes = useRowStyles();

    return (
        <PageWrapper>
            <h1>This is the wellReport</h1>
            <h2>Amount of reports: {reportData.length}</h2>
            <div>
                <CalendarGraph />
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Report</TableCell>
                                <TableCell align="right">Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reportData.map(e => (
                                <>
                                    <Row props={e} />
                                </>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* <ReportList reportData={reportData || []} /> */}
            </div>
        </PageWrapper>
    )
}
export default report;

