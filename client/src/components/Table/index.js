import React from "react";
import Table from "react-bootstrap/Table";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
=======
// import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
>>>>>>> dbb29ea8c5b7e2aa44346cae2b57a226fb3c584c


function WellTable(props) {
  
  return (
    <div>
<<<<<<< HEAD

      <Button type="submit">Add Well</Button>
=======
      {/* <Button type="submit">Add Well</Button> */}
>>>>>>> dbb29ea8c5b7e2aa44346cae2b57a226fb3c584c

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
<<<<<<< HEAD
          <tr>

          </tr>
=======
          {props.wells.map(well=>(
            <tr>
            <Link to={"/welltable/" + well._id}><td>{well.wellName}</td></Link>
            <td>{well.wellNum}</td>
            <td>{well.apiNum}</td>
            <td>{well.wellNum}</td>
            <td>{well.wellNum}</td>
            <td>{well.isOn ? "On":"Off"}</td>
            </tr>

          ))}
>>>>>>> dbb29ea8c5b7e2aa44346cae2b57a226fb3c584c
        </tbody>
      </Table>
    </div>
  );
}

export default WellTable;
