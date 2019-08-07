import React from "react";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'


function WellTable(props) {
  
  return (
    <div>
      {/* <Button type="submit">Add Well</Button> */}

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
            <tr key={well._id}>
            <td><Link to={"/welltable/" + well._id}>{well.wellName}</Link></td>
            <td>{well.wellNum}</td>
            <td>{well.apiNum}</td>
            <td>{well.wellNum}</td>
            <td>{well.wellNum}</td>
            <td>{well.isOn ? "On":"Off"}</td>
            </tr>

          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WellTable;
