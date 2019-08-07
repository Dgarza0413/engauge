import React from "react";
import Table from "react-bootstrap/Table";


function WellTableProd(props) {
    return (
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
                {/* {props.welldata.map(prod => (
                    <tr key={prod.id}>
                        <td>{prod.oil}</td>
                        <td>{prod.gas}</td>
                        <td>{prod.water}</td>
                        <td>{prod.csgingPSI}</td>
                        <td>{prod.tubingPSI}</td>
                    </tr>
                ))} */}
            </tbody>
        </Table>
    );
}

export default WellTableProd;
