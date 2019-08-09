import React from "react";
import Table from "react-bootstrap/Table";
import Card from "../Card";
import Moment from "react-moment";

function WellTableProd(props) {
    return (
        <div>
            {/* <Table striped bordered hover> */}
            <Card padding="0">
                <Table>
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
                        {props.well.map(w => (
                            <tr key={w.id}>
                                <td><Moment format="DD/MM/YYYY">{w.date}</Moment></td>
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
        </div >
    );
}

export default WellTableProd;
