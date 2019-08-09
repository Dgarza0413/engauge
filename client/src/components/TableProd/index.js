import React from "react";
import Table from "react-bootstrap/Table";


function WellTableProd(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Oil</th>
                        <th>Gas</th>
                        <th>Water</th>
                        <th>CsgingPSI</th>
                        <th>TubingPSI</th>
                    </tr>
                </thead>
                <tbody>
                    {props.well.map(w => (
                        <tr key={w.id}>
                            <td>{w.date}</td>
                            <td>{w.oil}</td>
                            <td>{w.gas}</td>
                            <td>{w.water}</td>
                            <td>{w.casingPSI}</td>
                            <td>{w.tubingPSI}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    );
}

export default WellTableProd;
