import React from 'react';
import Table from "react-bootstrap/Table";
import Card from "../Card";
import moment from 'moment';

import "./style.css";

const ReportTable = ({ reportData }) => {
    return (
        <Card padding="0" overflow="auto">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>type</th>
                        <th>report detail</th>
                        <th>supervisor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportData.length > 0
                            ? reportData.map((e, i) => {
                                return (
                                    <>
                                        <tr key={i}>
                                            <td>{moment(e.date).format("MM/DD/YYYY")}</td>
                                            <td>{e.type}</td>
                                            <td className="">{e.summary}</td>
                                            <td>{e.supervisor}</td>
                                        </tr>
                                    </>
                                )
                            })
                            : <tr> {"No data found"}</tr>
                    }
                </tbody>
            </Table>
        </Card>
    )
}

export default ReportTable;
