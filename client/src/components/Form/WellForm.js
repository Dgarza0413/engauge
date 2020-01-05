import React, { useEffect } from 'react';
import { Form, Container, Row, Col } from "react-bootstrap";
import {
    StringInput,
    NumberInput,
    Select,
    BoxInput,
    // TextBoxInput 
} from "../Form";
import Card from "../Card";
import Button from "../Button";
import API from "../../utils/API";
// import { Redirect } from 'react-router-dom';

import useInputChange from "../../hooks/useInputChange";

import "./style.css";

const WellForm = (props) => {
    console.log(props)
    console.log(props.location.aboutProps.wellName)
    // const [redirect, setRedirect] = useState(false)
    // const [wellData, setWellData] = useState({})

    const [value, handleInputChange, handlebind] = useInputChange()

    console.log(value)
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

    // const handleFormSubmit = event => {
    //     event.preventDefault();
    //     const passed = this.handleValidation()
    //     if (passed) {
    //         const obj = {
    //             wellName: this.state.wellName,
    //             wellNum: this.state.wellNum,
    //             wellType: this.state.wellType,
    //             apiNum: this.state.apiNum,
    //             operatorName: this.state.operatorName,
    //             leaseName: this.state.leaseName,
    //             county: this.state.county,
    //             fieldList: {
    //                 distNumber: this.state.fieldList.distNumber,
    //                 fieldNumber: this.state.fieldList.fieldNumber,
    //                 fieldName: this.state.fieldList.fieldName
    //             },
    //             latLong: {
    //                 latitude: this.state.latLong.latitude,
    //                 longitude: this.state.latLong.longitude
    //             },
    //             completionDepth: this.state.completionDepth,
    //             trueVerticalDepth: this.state.trueVerticalDepth,
    //             wellBoreProfile: this.state.wellBoreProfile,
    //             surfaceLocation: this.state.surfaceLocation
    //         }
    //         console.log(obj)
    //         API.createWellData(obj)
    //             .then(res => {

    //                 console.log(res.data.items);

    //                 this.setState({
    //                     obj: res.data.items,
    //                     redirect: true
    //                 });
    //             })
    //             .catch(err => console.log(err));
    //         console.log("we passed validation");
    //     } else {
    //         console.log("we failed validation");
    //     }
    // };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const post = await API.createWellData(value)
            console.log(post)
        } catch (error) {
            console.error(error)
        }
    }

    // useEffect(() => {
    //     if (props.location.aboutProps.wellName) {
    //         handlebind(props.location.aboutProps.wellName)
    //     }
    // })

    // const handleRadioClick = event => {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <Card>
                    <Container>
                        <Row>
                            <Col lg="4">
                                <StringInput
                                    label="Well Name"
                                    name="wellName"
                                    onChange={handleInputChange}
                                    placeholder="Enter Well Name" />
                            </Col>
                            <Col lg="4">
                                <StringInput
                                    label="Well No."
                                    name="wellNum"
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
                                    onChange={handleInputChange}
                                    placeholder="42-XXX-XXXX"
                                />
                            </Col>
                            <Col lg="4">
                                <StringInput
                                    label="Operator Name"
                                    name="operatorName"
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
        </div>
    )
}

export default WellForm