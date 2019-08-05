import React from "react";
import Table from 'react-bootstrap/Table'


function WellTable() {
    return (

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Well Name</th>
      <th>API Number</th>
      <th>Flow</th>
      <th>Disposal</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Well 1</td>
      <td>123-45-1235</td>
      <td>Plunger Lift</td>
      <td>Down the drain</td>
      <td>On</td>
    </tr>
  </tbody>
</Table>
    );
}

export default WellTable;