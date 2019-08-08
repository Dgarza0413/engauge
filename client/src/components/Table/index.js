import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { MDBCol, MDBIcon } from "mdbreact";
import "./style.css";
import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

class WellTable extends React.Component {
  state = {
    filter: "",
    dropDown: "wellName"
  };
  handleChange = e => {
    console.log(e.target)
    console.log(e.target.name);
    console.log(e.target.value);
    const {name,value }= e.target
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <Form.Group
            as={InputGroup.Prepend}
            variant="outline-secondary"
            controlId="exampleForm.ControlSelect1"
          >
            <InputGroup.Text>Filter By</InputGroup.Text>
            <FormControl as="select"  name="dropDown" onChange={this.handleChange} value={this.state.dropDown}>
              <option value="wellName">Well Name</option>
              <option value="apiNum">API Number</option>
              <option value="isOn">Well Status</option>
            </FormControl>
          </Form.Group>
          <FormControl aria-describedby="basic-addon1" name="filter"
            onChange={this.handleChange}
            value={this.state.filter} 
            placeholder="Search"/>
        </InputGroup>

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
            {this.props.wells
              .filter(well => {
                console.log(well)
                console.log(well[this.state.dropDown],this.state.dropDown)
                return well[this.state.dropDown].toString()
                  // .toLowerCase()
                  .startsWith(this.state.filter.toLowerCase());
              })
              .map(well => (
                <tr>
                  <Link to={"/welltable/" + well._id}>
                    <td>{well.wellName}</td>
                  </Link>
                  <td>{well.wellNum}</td>
                  <td>{well.apiNum}</td>
                  <td>{well.wellNum}</td>
                  <td>{well.wellNum}</td>
                  <td>{well.isOn ? "On" : "Off"}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default WellTable;
