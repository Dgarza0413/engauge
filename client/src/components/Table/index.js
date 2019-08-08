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
    console.log(e.target.name);
    this.setState({
      filter: e.target.value,
      // dropDown: e.target.name
    });
  };
  // SearchPage() {
  //   return (
  //     <MDBCol md="9">
  //       <div className="input-group md-form form-sm form-1 pl-0">
  //         <div className="input-group-prepend">
  //           <span
  //             className="input-group-text purple lighten-3"
  //             id="basic-text1"
  //           >
  //             <MDBIcon className="text-white" icon="search" />
  //           </span>
  //         </div>
  //         <input
  //           className="form-control my-0 py-1"
  //           type="text"
  //           placeholder="Search"
  //           aria-label="Search"
  //           name="searchBar"
  //           onChange={this.handleChange}
  //           value={this.state.filter}
  //         />
  //       </div>
  //     </MDBCol>
  //   );
  // }

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
            <FormControl as="select">
              <option name="byName">Well Name</option>
              <option name="byAPI">API Number</option>
              <option name="byStatus">Well Status</option>
            </FormControl>
          </Form.Group>
          <FormControl aria-describedby="basic-addon1" name="searchBar"
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
                return well[this.state.dropDown]
                  .toLowerCase()
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
