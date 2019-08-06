import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


function WellTable(props) {
  // props.wellArr = what was in state in welltable.js
  return (
    <div>
      <Button type="submit">Add Well</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Well Name</th>
            <th>Well Number</th>
            <th>API Number</th>
            <th>Flow</th>
            <th>Disposal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.wells.map(well=>(
            <tr>
            <td>{well.wellName}</td>
            <td>{well.wellNum}</td>
            <td>{well.apiNum}</td>
            <td>{well.wellNum}</td>
            <td>{well.wellNum}</td>
            <td>{well.wellNum}</td>
            </tr>

          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WellTable;
