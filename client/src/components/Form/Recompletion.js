import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from "react-bootstrap";
import { StringInput, NumberInput, Select } from ".";
import PageWrapper from "../PageWrapper";
import Card from "../Card";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
import API from "../../utils/API";

import useInputChange from '../../hooks/useInputChange';

const Recompletion = (props) => {
    const [value, handleInputChange, handleBind] = useInputChange();
    const { id, operation, schema } = props.match.params;

    console.log(props)

    console.log(value)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        API.postWellRecomp(id, value)
            .then(response => console.log(response))
            .catch(err => console.error(err))
    }

    const formType = (pathName) => {
        switch (pathName) {
            case "add":
                return <SectionTitle>New Recompletion</SectionTitle>
            case "update":
                return <SectionTitle>Update Recompletion</SectionTitle>
            default:
                break
        }
    }

    return (
        <PageWrapper>
            {formType(props.operation)}
            <form onSubmit={handleFormSubmit}>
                <Card>
                    <Container>
                        <Row>
                            <Col md="4">
                                <StringInput
                                    label="Spud Date"
                                    name="spudDate"
                                    // value={value.spudDate}
                                    onChange={handleInputChange}
                                    placeholder="01-01-2019"
                                />
                            </Col>
                            <Col md="8">
                                <StringInput
                                    label="Field & Reservior"
                                    name="fieldAndReservoir"
                                    // value={value.fieldAndReservoir}
                                    onChange={handleInputChange}
                                    placeholder="Enter Field & Reservoir"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3">
                                <StringInput
                                    label="Date of Test"
                                    name="testData.testDate"
                                    // value={value.testData.testDate}
                                    onChange={handleInputChange}
                                    placeholder="01-01-2019"
                                />
                            </Col>
                            <Col lg="2">
                                <NumberInput
                                    label="Hours Tested"
                                    name="testData.hoursTested"
                                    // value={value.testData.hoursTested}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                />
                            </Col>
                            <Col lg="4">
                                <Select
                                    label="Production Method"
                                    name="testData.prodMethod"
                                    // value={value.testData.prodMethod}
                                    onChange={handleInputChange} >
                                    <option>Flowing</option>
                                    <option>Gas Lift</option>
                                    <option>Pumpjack</option>
                                    <option>Plunger</option>
                                    <option>ESP</option>
                                </Select>
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Choke Size"
                                    name="testData.chokeSize"
                                    // value={value.testData.chokeSize}
                                    onChange={handleInputChange}
                                    placeholder="9.0"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card>
                    <Container>
                        <Row>
                            <Col lg="6">
                                <Form.Label>Total Depth</Form.Label>
                                <Row>
                                    <Col lg="6">
                                        <NumberInput
                                            label="TVD"
                                            name="totalDepth.tvdTD"
                                            // value={value.totalDepth.tvdTD}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            unit="ft."
                                        />
                                    </Col>
                                    <Col lg="6">
                                        <NumberInput
                                            label="MD"
                                            name="totalDepth.mdTD"
                                            // value={value.totalDepth.mdTD}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            unit="ft."
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6">
                                <Form.Label>Plug Back Depth</Form.Label>
                                <Row>
                                    <Col lg="6">
                                        <NumberInput
                                            label="TVD"
                                            name="plugBackDepth.tvdPBD"
                                            // value={value.plugBackDepth.tvdPBD}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            unit="ft."
                                        />
                                    </Col>
                                    <Col lg="6">
                                        <NumberInput
                                            label="MD"
                                            name="plugBackDepth.mdPBD"
                                            // value={value.plugBackDepth.mdPBD}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            unit="ft."
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card>
                    <Container>
                        <Form.Label>Casing Record</Form.Label>
                        <Row>
                            <Col lg="6">
                                <Select
                                    label="Casing Type"
                                    name="casingRecord.casingType"
                                    // value={value.casingRecord.casingType}
                                    onChange={handleInputChange}
                                >
                                    <option>Surface</option>
                                    <option>Intermediate</option>
                                    <option>Production</option>
                                </Select>
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Casing Size"
                                    name="casingRecord.casingSize"
                                    // value={value.casingRecord.casingSize}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="in."
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Hole Size"
                                    name="casingRecord.holeSize"
                                    // value={value.casingRecord.holeSize}
                                    onChange={handleInputChange}
                                    placeholder="07"
                                    unit="in."
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3">
                                <StringInput
                                    label="Cement Class"
                                    name="casingRecord.cementClass"
                                    // value={value.casingRecord.cementClass}
                                    onChange={handleInputChange}
                                    placeholder="Class A"
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Cement Amount"
                                    name="casingRecord.cementAmt"
                                    // value={value.casingRecord.cementAmt}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="sacks"
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Slurry Volume"
                                    name="casingRecord.slurryVol"
                                    // value={value.casingRecord.slurryVol}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="cu. ft."
                                    width="65%"
                                />
                            </Col>
                            <Col lg="3">
                                <StringInput
                                    label="Top of Cement"
                                    name="casingRecord.topOfCement"
                                    // value={value.casingRecord.topOfCement}
                                    onChange={handleInputChange}
                                    placeholder="Surface"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card>
                    <Container>
                        <Form.Label>Tubing Records</Form.Label>
                        <Row>
                            <Col lg="3">
                                <NumberInput
                                    label="Size"
                                    name="tubingRecord.size"
                                    // value={value.tubingRecord.size}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="in."
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Depth Set"
                                    name="tubingRecord.depthSet"
                                    // value={value.tubingRecord.depthSet}
                                    onChange={handleInputChange}
                                    placeholder="07"
                                    unit="in."
                                />
                            </Col>
                            <Col lg="3">
                                <Select
                                    label="Packer Type"
                                    name="tubingRecord.packerType"
                                    // value={value.tubingRecord.packerType}
                                    onChange={handleInputChange}
                                >
                                    <option>Hydraulic Set</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Packer Depth"
                                    name="tubingRecord.packerDepth"
                                    // value={value.tubingRecord.packerDepth}
                                    onChange={handleInputChange}
                                    placeholder="07"
                                    unit="ft."
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card>
                    <Container>
                        <Form.Label>Production / Injection / Disposal Interval</Form.Label>
                        <Row>
                            <Col md="6">
                                <StringInput
                                    label="From"
                                    name="prodInjDispInt.from"
                                    // value={value.prodInjDispInt.from}
                                    onChange={handleInputChange}
                                    placeholder="Enter Where From"
                                />
                            </Col>
                            <Col md="6">
                                <StringInput
                                    label="To"
                                    name="prodInjDispInt.to"
                                    // value={value.prodInjDispInt.to}
                                    onChange={handleInputChange}
                                    placeholder="Enter Where To"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card>
                    <Container>
                        <Form.Label>Formation Records</Form.Label>
                        <Row>
                            <Col lg="6">
                                <Select
                                    label="Principal Geological Markers & Formation Tops"
                                    name="formationRecord.markers"
                                    // value={value.state.formationRecord.markers}
                                    onChange={handleInputChange}
                                >
                                    <option>Hydraulic Set</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="TVD"
                                    name="formationRecord.tvdDepth"
                                    // value={value.formationRecord.tvdDepth}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="ft."
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="MD"
                                    name="formationRecord.mdDepth"
                                    // value={value.formationRecord.mdDepth}
                                    onChange={handleInputChange}
                                    placeholder="07"
                                    unit="ft."
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="8">
                                <Select
                                    label="Formation Type"
                                    name="formationRecord.formationType"
                                    // value={value.formationRecord.formationType}
                                    onChange={handleInputChange} >
                                    <option>Zone With Corrosive Formation Fluids</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </Col>
                            <Col md="4">
                                <Select
                                    label="Isolated"
                                    name="formationRecord.isIsolated"
                                    // value={value.formationRecord.isIsolated}
                                    onChange={handleInputChange}
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                {/* {handleRedirect()} */}
                <Button type="submit" />
            </form>
        </PageWrapper>
    )
}

export default Recompletion
