import React, { useEffect } from 'react';
import moment from 'moment';

//Redux
import { connect } from "react-redux";
import { addWell } from '../../redux/actions/actions';

import { Form, Container, Row, Col } from "react-bootstrap";
import { Grid, TextField, Typography } from '@material-ui/core';

import {
    StringInput,
    NumberInput,
    Select,
    BoxInput,
} from "../Form";
import Card from "../Card";
import Button from "../Button";
import API from "../../utils/API";
import PageWrapper from "../PageWrapper";

// import { Redirect } from 'react-router-dom';

import useInputChange from "../../hooks/useInputChange";

import "./style.css";

const WellForm = (props) => {
    const [value, handleInputChange, handlebind] = useInputChange()

    // const handleValidation = () => {
    //     let wellName = this.state.wellName;
    //     let wellNum = this.state.wellNum;
    //     let apiNum = this.state.apiName;

    //     if (!wellName.length > 0) {
    //         return false
    //     }
    //     if (!wellNum.length > 0) {
    //         return false
    //     }
    //     if (!apiNum === 10) {
    //         return false
    //     }
    //     return true
    // }

    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     if (name === "latitude" || name === "longitude") {
    //         const latLong = { ...this.state.latLong }
    //         latLong[name] = value;
    //         this.setState({ latLong })
    //     } else if (name === "distNumber" || name === "fieldNumber" || name === "fieldName") {
    //         const fieldList = { ...this.state.fieldList }
    //         fieldList[name] = value;
    //         this.setState({ fieldList })
    //     } else {
    //         this.setState({
    //             [name]: value
    //         });
    //     }
    // };

    // const handleRedirect = () => {
    //     if (redirect === true) {
    //         return <Redirect to="/welltable" />
    //     }
    // }

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();

    // }
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const pathName = props.match.path;
        const id = props.match.params.id;

        if (pathName === "/well/:id/update") {
            try {
                console.log("well form update")
                const post = await API.updateWellData(id, value)
                console.log(post)
            } catch (error) {
                console.error(error)
            }
            // its not good to rely on the pathName to always be
            // consider changing
        } else {
            try {
                const post = await API.createWellData(value)
                console.log(post)
            } catch (error) {
                console.error(error)
            }
        }
    }

    useEffect(() => {
        if (props.location.aboutProps) {
            handlebind(props.location.aboutProps)
        } else if (props.match.path === "/new-well") {
            return
        }
    }, [])

    // const handleRadioClick = event => {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }

    return (
        <div>
            <PageWrapper>
                <form onSubmit={handleFormSubmit}>
                    <Card>
                        <Grid container spacing={3}>
                            <Typography variant="h4">Update General Info</Typography>
                            <Grid item xs={12}>
                                <TextField
                                    value={moment(value.date).format("YYYY-MM-DD") || ""}
                                    onChange={handleInputChange}
                                    name="spudDate"
                                    type="date"
                                    label="Spud Date"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    value={value.wellName || ""}
                                    onChange={handleInputChange}
                                    name="wellName"
                                    label="well Name"
                                    placeholder="Garza"
                                    // helperText="numbers can be included"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    value={value.wellNum || ""}
                                    onChange={handleInputChange}
                                    name="wellNum"
                                    label="well Number"
                                    type="number"
                                    placeholder="1"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    value={value.type || ""}
                                    onChange={handleInputChange}
                                    name="wellType"
                                    label="well Type"
                                    // type="number"
                                    placeholder="Oil"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    value={value.apiNum || ""}
                                    onChange={handleInputChange}
                                    name="apiNum"
                                    label="API No."
                                    placeholder="42-XXX-XXXX"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    value={value.operatorName || ""}
                                    onChange={handleInputChange}
                                    name="operator"
                                    label="Operator Name"
                                    placeholder="Enter Operator Name"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    value={value.leaseName || ""}
                                    onChange={handleInputChange}
                                    name="leaseName"
                                    label="Lease Name"
                                    placeholder="Enter Lease Name"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    value={value.county || ""}
                                    onChange={handleInputChange}
                                    name="county"
                                    label="county"
                                    placeholder="Travis"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    // value={value. || ""}
                                    // onChange={handleInputChange}
                                    name="districtNum"
                                    label="RRC District No."
                                    placeholder="02"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    // value={value.fieldName|| ""}
                                    // onChange={handleInputChange}
                                    name="fieldNum"
                                    label="Field No."
                                    placeholder="02345"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Container>
                            <Row>
                                <Col lg="4">
                                    <StringInput
                                        label="Well Name"
                                        name="wellName"
                                        value={value.wellName || ""}
                                        onChange={handleInputChange}
                                        placeholder="Enter Well Name" />
                                </Col>
                                <Col lg="4">
                                    <StringInput
                                        label="Well No."
                                        name="wellNum"
                                        value={value.wellNum || ""}
                                        onChange={handleInputChange}
                                        placeholder="02" />
                                </Col>
                                <Col lg="4">
                                    <Select
                                        label="Well Type"
                                        name="wellType"
                                        onChange={handleInputChange}
                                    >
                                        <options>{''}</options>
                                        <option>Oil</option>
                                        <option>Gas</option>
                                        <option>Saltwater Disposal</option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <StringInput
                                        label="API No."
                                        name="apiNum"
                                        value={value.apiNum || ""}
                                        onChange={handleInputChange}
                                        placeholder="42-XXX-XXXX"
                                    />
                                </Col>
                                <Col lg="4">
                                    <StringInput
                                        label="Operator Name"
                                        name="operator"
                                        value={value.operator || ""}
                                        onChange={handleInputChange}
                                        placeholder="Enter Operator Name"
                                    />
                                </Col>
                                <Col lg="3">
                                    <StringInput
                                        label="Lease Name"
                                        name="leaseName"
                                        onChange={handleInputChange}
                                        placeholder="Enter Lease Name"
                                    />
                                </Col>
                                <Col lg="2">
                                    <StringInput
                                        label="County"
                                        name="county"
                                        value={value.county || ""}
                                        onChange={handleInputChange}
                                        placeholder="Travis"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <NumberInput
                                        label="RRC District No."
                                        name="distNumber"
                                        onChange={handleInputChange}
                                        placeholder="02"
                                    />
                                </Col>
                                <Col lg="3">
                                    <NumberInput
                                        label="Field No."
                                        name="fieldNumber"
                                        onChange={handleInputChange}
                                        placeholder="02"
                                    />
                                </Col>
                                <Col lg="6">
                                    <StringInput
                                        label="Field Name"
                                        name="fieldName"
                                        onChange={handleInputChange}
                                        placeholder="Enter Field Name"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <NumberInput
                                        label="Latitude (WGS84)"
                                        name="latitude"
                                        onChange={handleInputChange}
                                        placeholder="90.000000"
                                    />
                                </Col>
                                <Col lg="3">
                                    <NumberInput
                                        label="Longitude (WGS84)"
                                        name="longitude"
                                        onChange={handleInputChange}
                                        placeholder="-90.000000"
                                    />
                                </Col>
                                <Col lg="3">
                                    <NumberInput
                                        label="Completion Depth"
                                        name="completionDepth"
                                        onChange={handleInputChange}
                                        placeholder="1000"
                                        unit="ft."
                                    />
                                </Col>
                                <Col lg="3">
                                    <NumberInput
                                        label="True Vertical Depth"
                                        name="trueVerticalDepth"
                                        onChange={handleInputChange}
                                        placeholder="1000"
                                        unit="ft."
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoxInput label="Wellbore Profile">
                                        <Form.Check
                                            custom
                                            inline
                                            name="wellBoreProfile"
                                            onClick={handleInputChange}
                                            value="Vertical"
                                            label="Vertical"
                                            type="radio"
                                            id="custom-inline-checkbox-1"
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            name="wellBoreProfile"
                                            onClick={handleInputChange}
                                            value="Horizontal"
                                            label="Horizontal"
                                            type="radio"
                                            id="custom-inline-checkbox-2"
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            name="wellBoreProfile"
                                            onClick={handleInputChange}
                                            value="Directional"
                                            label="Directional"
                                            type="radio"
                                            id="custom-inline-checkbox-3"
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            name="wellBoreProfile"
                                            onClick={handleInputChange}
                                            value="Sidetrack"
                                            label="Sidetrack"
                                            type="radio"
                                            id="custom-inline-checkbox-4"
                                        />
                                    </BoxInput>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoxInput label="Surface Location">
                                        <Form.Check
                                            custom
                                            inline
                                            name="surfaceLocation"
                                            onClick={handleInputChange}
                                            value="Land"
                                            label="Land"
                                            type="radio"
                                            id="custom-inline-radio-1"
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            name="surfaceLocation"
                                            onClick={handleInputChange}
                                            value="Bay/Estuary"
                                            label="Bay/Estuary"
                                            type="radio"
                                            id="custom-inline-radio-2"
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            name="surfaceLocation"
                                            onClick={handleInputChange}
                                            value="Inland Waterway"
                                            label="Inland Waterway"
                                            type="radio"
                                            id="custom-inline-radio-3"
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            name="surfaceLocation"
                                            onClick={handleInputChange}
                                            value="Offshore"
                                            label="Offshore"
                                            type="radio"
                                            id="custom-inline-radio-4"
                                        />
                                    </BoxInput>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Button type="submit" />
                </form>
            </PageWrapper>
        </div>
    )
}

export default WellForm;