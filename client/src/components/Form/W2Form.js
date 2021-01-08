import React, {useEffect} from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { StringInput, NumberInput, Select, BoxInput, TextBoxInput } from ".";
import Card from "../Card";
import Button from "../Button";

import useInputChange from '../../hooks/useInputChange';

const W2Form = () => {

    const [value, handleInputChange, handleBind] = useInputChange()

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(event.target.name)
            console.log(event.target.value)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleBind()
    }, [])

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <Card>
                    <Container>
                        <Row>
                            <Col md="4">
                                <StringInput
                                    label="Spud Date"
                                    name="spudDate"
                                    // value={this.state.spudDate}
                                    onChange={handleInputChange}
                                    placeholder="01-01-2019" />
                            </Col>
                            <Col md="8">
                                <StringInput
                                    label="Field & Reservior"
                                    name="fieldAndReservoir"
                                    // value={this.state.fieldAndReservoir}
                                    onChange={handleInputChange}
                                    placeholder="Enter Field & Reservoir" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="3">
                                <StringInput
                                    label="Date of Test"
                                    name="testDate"
                                    // value={this.state.testData.testDate}
                                    onChange={handleInputChange}
                                    placeholder="01-01-2019" />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Hours Tested"
                                    name="hoursTested"
                                    // value={this.state.testData.hoursTested}
                                    onChange={handleInputChange}
                                    placeholder="02" />
                            </Col>
                            <Col lg="4">
                                <Select
                                    label="Production Method"
                                    name="prodMethod"
                                    // value={this.state.testData.prodMethod}
                                    onChange={handleInputChange}
                                >
                                    <option>Flowing</option>
                                    <option>Gas Lift</option>
                                    <option>Pumpjack</option>
                                    <option>Plunger</option>
                                    <option>ESP</option>
                                </Select>
                            </Col>
                            <Col lg="2">
                                <NumberInput
                                    label="Choke Size"
                                    name="chokeSize"
                                    // value={this.state.testData.chokeSize}
                                    onChange={handleInputChange}
                                    placeholder="9.0" />
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
                                            name="tvdTD"
                                            // value={this.state.totalDepth.tvdTD}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            unit="ft." />
                                    </Col>
                                    <Col lg="6">
                                        <NumberInput
                                            label="MD"
                                            name="mdTD"
                                            // value={this.state.totalDepth.mdTD}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            unit="ft." />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6">
                                <Form.Label>Plug Back Depth</Form.Label>
                                <Row>
                                    <Col lg="6">
                                        <NumberInput
                                            label="TVD"
                                            name="tvdPBD"
                                            // value={this.state.plugBackDepth.tvdPBD}
                                            onChange={handleInputChange}
                                            placeholder="1000"
                                            unit="ft."
                                        />
                                    </Col>
                                    <Col lg="6">
                                        <NumberInput
                                            label="MD"
                                            name="mdPBD"
                                            // value={this.state.plugBackDepth.mdPBD}
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
                                    name="casingType"
                                    // value={this.state.casingRecord.casingType}
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
                                    name="casingSize"
                                    // value={this.state.casingRecord.casingSize}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="in."
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Hole Size"
                                    name="holeSize"
                                    // value={this.state.casingRecord.holeSize}
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
                                    name="cementClass"
                                    // value={this.state.casingRecord.cementClass}
                                    onChange={handleInputChange}
                                    placeholder="Class A" />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Cement Amount"
                                    name="cementAmt"
                                    // value={this.state.casingRecord.cementAmt}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="sacks"
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Slurry Volume"
                                    name="slurryVol"
                                    // value={this.state.casingRecord.slurryVol}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="cu. ft."
                                    width="65%"
                                />
                            </Col>
                            <Col lg="3">
                                <StringInput
                                    label="Top of Cement"
                                    name="topOfCement"
                                    // value={this.state.casingRecord.topOfCement}
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
                                    name="size"
                                    // value={this.state.tubingRecord.size}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="in."
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="Depth Set"
                                    name="depthSet"
                                    // value={this.state.tubingRecord.depthSet}
                                    onChange={handleInputChange}
                                    placeholder="07"
                                    unit="in."
                                />
                            </Col>
                            <Col lg="3">
                                <Select
                                    label="Packer Type"
                                    name="packerType"
                                    // value={this.state.tubingRecord.packerType}
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
                                    name="packerDepth"
                                    // value={this.state.tubingRecord.packerDepth}
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
                                    name="from"
                                    // value={this.state.prodInjDispInt.from}
                                    onChange={handleInputChange}
                                    placeholder="Enter Where From"
                                />
                            </Col>
                            <Col md="6">
                                <StringInput
                                    label="To"
                                    name="to"
                                    // value={this.state.prodInjDispInt.to}
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
                                    name="markers"
                                    // value={this.state.formationRecord.markers}
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
                                    name="tvdDepth"
                                    // value={this.state.formationRecord.tvdDepth}
                                    onChange={handleInputChange}
                                    placeholder="02"
                                    unit="ft."
                                />
                            </Col>
                            <Col lg="3">
                                <NumberInput
                                    label="MD"
                                    name="mdDepth"
                                    // value={this.state.formationRecord.mdDepth}
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
                                    name="formationType"
                                    // value={this.state.formationRecord.formationType}
                                    onChange={handleInputChange}
                                >
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
                                    name="isIsolated"
                                    // value={this.state.formationRecord.isIsolated}
                                    onChange={handleInputChange}
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Button type="submit" />
            </form>
        </div>
    )
}

export default W2Form;
