import React from 'react';
import Table from "react-bootstrap/Table";
import Card from "../Card";
import moment from 'moment';

import "./style.css";

const ReportTable = ({ reportData }) => {

    return (
        <div>
            <Card padding="0" overflow="auto">
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>type</th>
                            <th>report detail</th>
                            <th>supervisor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.length > 0
                            ? reportData.map((e, i) => {
                                return (
                                    <>
                                        <tr key={i}>
                                            <td>{moment(e.date).format("MM/DD/YYYY")}</td>
                                            <td></td>
                                            <td className="">{e.summary}</td>
                                            <td>{e.supervisor}</td>
                                        </tr>
                                    </>
                                )
                            })
                            : <tr><td>{"No data found"}</td></tr>}

                    </tbody>
                </Table>
            </Card>
        </div>
    )
}

export default ReportTable;
