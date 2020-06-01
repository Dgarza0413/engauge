import React from "react";
import Table from "react-bootstrap/Table";
import Card from "../Card";
import moment from "moment"

const ProdTable = ({ well }) => {
    return (
        <Card padding="0" overflow="auto">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Oil</th>
                        <th>Gas</th>
                        <th>Water</th>
                        <th>Casing PSI</th>
                        <th>Tubing PSI</th>
                    </tr>
                </thead>
                <tbody>
                    {well.map((w, i) => (
                        <tr key={i}>
                            <td>{moment(w.date).format("MM/DD/YYYY")}</td>
                            <td>{w.oil}</td>
                            <td>{w.gas}</td>
                            <td>{w.water}</td>
                            <td>{w.casingPSI}</td>
                            <td>{w.tubingPSI}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}

export default ProdTable;
