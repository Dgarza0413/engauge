import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ToggleButton from "./toggleButton";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Card from "../Card";
import "./style.css";

class WellTable extends React.Component {
  state = {
    filter: "",
    dropDown: "wellName"
  };

    handleChange = e => {
        const { name, value }= e.target;
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
                    </FormControl>
                </Form.Group>
                <FormControl aria-describedby="basic-addon1" name="filter"
                    onChange={this.handleChange}
                    value={this.state.filter} 
                    placeholder="Search"/>
                </InputGroup>
                <Card padding="0" overflow="auto">
                    <Table>
                        <thead>
                            <tr>
                                <th>Well Name</th>
                                <th>Well Number</th>
                                <th>API Number</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.wells
                                .filter(well => {
                                    return well[this.state.dropDown].toString()
                                    .startsWith(this.state.filter.toLowerCase());
                                }).map(well => { 
                                    return (
                                        <tr key={well._id}>
                                            <td>
                                                <Link to={"/welltable/" + well._id}>
                                                    {well.wellName}
                                                </Link>
                                            </td>
                                            <td>{well.wellNum}</td>
                                            <td>{well.apiNum}</td>
                                            <td><ToggleButton isOn={well.isOn} name={well.wellName} id={well._id}/></td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </Card>
            </div>
        );
    }
}

export default WellTable;
