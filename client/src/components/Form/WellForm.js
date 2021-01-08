import React, { useEffect } from 'react';
import SectionTitle from '../SectionTitle';

import { Form, Container, Row, Col } from "react-bootstrap";

import { StringInput, NumberInput, Select, BoxInput } from "../Form";
import Card from "../Card";
import Button from "../Button";
import API from "../../utils/API";
import PageWrapper from "../PageWrapper";

import useInputChange from "../../hooks/useInputChange";

import "./style.css";

const WellForm = (props) => {
    const [value, handleInputChange, handlebind] = useInputChange()

    const pathName = props.match.path;

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

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // const pathName = props.match.path;
        const id = props.match.params.id;

        if (pathName === "/well/:id/update") {
            try {
                await API.updateWellData(id, value)
            } catch (error) {
                console.error(error)
            }
            // its not good to rely on the pathName to always be
            // consider changing
        } else {
            try {
                await API.createWellData(value)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const formType = (pathName) => {
        switch (pathName) {
            case "add":
                return <SectionTitle>New Well</SectionTitle>
            case "update":
                return <SectionTitle>Update Well</SectionTitle>
            default:
                break
        }
    }

    useEffect(() => {
        if (props.location.aboutProps) {
            handlebind(props.location.aboutProps)
        }
    }, [])

    // const handleRadioClick = event => {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }

    return (
        <PageWrapper>
            {formType(props.operation)}
            <form onSubmit={handleFormSubmit}>
                <Card>
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
                                    placeholder="number" />
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
    )
}

export default WellForm;