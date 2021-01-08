import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import { StringInput, NumberInput, Select, BoxInput } from "../Form";
import { Form, Row, Col } from "react-bootstrap";
import Card from "../Card";
// import Button from "../Button";
import Button from 'react-bootstrap/Button'
import PageWrapper from "../PageWrapper";


import { style } from '../Button';

import API from "../../utils/API";
import URI from '../../utils/URI';

import useInputChange from "../../hooks/useInputChange";
import useHandleFetch from "../../hooks/useFetch";
import "./style.css";

const WellForm = (props) => {
    const [value, handleInputChange, handleBind] = useInputChange();
    const [fetchValue, handleFetchGET] = useHandleFetch();
    const [viewMode, setViewMode] = useState(false);

    const { readOnly, data } = props;
    const { operation, id } = props.match.params
    const history = useHistory()

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (operation === "update" || 'edit') {
            try {
                await API.updateWellData(id, value)
                await history.push(`/well/${id}`)
            } catch (error) {
                console.error(error)
            }
        } else if (operation === "add") {
            try {
                await API.createWellData(value)
                await history.push(`/well`)
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log('report an error')
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
        if (props.match.path === '/well/:id') {
            setViewMode(true)
        }
        if (operation === "update") {
            handleFetchGET(URI.well_URI(id))
        }
    }, [])

    useEffect(() => {
        handleBind(data)
    }, [data])

    useEffect(() => {
        handleBind(fetchValue)
    }, [fetchValue])

    return (
        <PageWrapper viewMode={viewMode}>
            {formType(props.operation)}
            <form onSubmit={handleFormSubmit}>
                <Card>
                    <Row>
                        <Col lg="4">
                            <StringInput
                                readOnly={readOnly}
                                size="lg"
                                label="Well Name"
                                name="wellName"
                                value={value && value.wellName || ""}
                                onChange={handleInputChange}
                                placeholder="Enter Well Name" />
                        </Col>
                        <Col lg="4">
                            <StringInput
                                readOnly={readOnly}
                                size="lg"
                                label="Well No."
                                name="wellNum"
                                value={value && value.wellNum || ""}
                                onChange={handleInputChange}
                                placeholder="number" />
                        </Col>
                        <Col lg="4">
                            <Select
                                readOnly={readOnly}
                                label="Well Type"
                                name="wellType"
                                value={value && value.wellType || ""}
                                onChange={handleInputChange}
                            >
                                <option>{''}</option>
                                <option>Oil</option>
                                <option>Gas</option>
                                <option>Saltwater Disposal</option>
                            </Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                            <StringInput
                                // plaintext={readOnly}
                                readOnly={readOnly}
                                label="API No."
                                name="apiNum"
                                value={value && value.apiNum || ""}
                                onChange={handleInputChange}
                                placeholder="42-XXX-XXXX"
                            />
                        </Col>
                        <Col lg="4">
                            <StringInput
                                readOnly={readOnly}
                                label="Operator Name"
                                name="operator"
                                value={value && value.operator || ""}
                                onChange={handleInputChange}
                                placeholder="Enter Operator Name"
                            />
                        </Col>
                        <Col lg="3">
                            <StringInput
                                readOnly={readOnly}
                                label="Lease Name"
                                name="leaseName"
                                value={value && value.leaseName || ""}
                                onChange={handleInputChange}
                                placeholder="Enter Lease Name"
                            />
                        </Col>
                        <Col lg="2">
                            <StringInput
                                readOnly={readOnly}
                                label="County"
                                name="county"
                                value={value && value.county || ""}
                                onChange={handleInputChange}
                                placeholder="County"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                            <NumberInput
                                readOnly={readOnly}
                                label="RRC District No."
                                name="fieldList.distNumber"
                                value={value
                                    && value.fieldList
                                    && value.fieldList.distNumber || ''}
                                onChange={handleInputChange}
                                placeholder={`district no.`}
                            />
                        </Col>
                        <Col lg="3">
                            <NumberInput
                                readOnly={readOnly}
                                label="Field No."
                                name="fieldList.fieldNumber"
                                value={value
                                    && value.fieldList
                                    && value.fieldList.fieldNumber || ''}
                                onChange={handleInputChange}
                                placeholder="Number"
                            />
                        </Col>
                        <Col lg="6">
                            <StringInput
                                readOnly={readOnly}
                                label="Field Name"
                                name="fieldList.fieldName"
                                value={value
                                    && value.fieldList
                                    && value.fieldList.fieldName || ''}
                                onChange={handleInputChange}
                                placeholder="Enter Field Name"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                            <NumberInput
                                readOnly={readOnly}
                                label="Latitude (WGS84)"
                                name="coordinates.latitude"
                                value={value
                                    && value.coordinates
                                    && value.coordinates.latitude || ''}
                                onChange={handleInputChange}
                                placeholder="latitude"
                            />
                        </Col>
                        <Col lg="3">
                            <NumberInput
                                readOnly={readOnly}
                                label="Longitude (WGS84)"
                                name="coordinates.longitude"
                                value={value
                                    && value.coordinates
                                    && value.coordinates.longitude || ''}
                                onChange={handleInputChange}
                                placeholder="longitude"
                            />
                        </Col>
                        <Col lg="3">
                            <NumberInput
                                readOnly={readOnly}
                                label="Completion Depth"
                                name="completionDepth"
                                value={value && value.completionDepth || ''}
                                onChange={handleInputChange}
                                placeholder="comp depth"
                                unit="ft."
                            />
                        </Col>
                        <Col lg="3">
                            <NumberInput
                                readOnly={readOnly}
                                label="True Vertical Depth"
                                name="trueVerticalDepth"
                                value={value && value.trueVerticalDepth || ''}
                                onChange={handleInputChange}
                                placeholder="TVD"
                                unit="ft."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BoxInput label="Wellbore Profile">
                                <Form.Check
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="wellBoreProfile"
                                    checked={value && value.wellBoreProfile === 'Vertical'}
                                    onClick={handleInputChange}
                                    value="Vertical"
                                    label="Vertical"
                                    type="radio"
                                    id="custom-inline-checkbox-1"
                                />
                                <Form.Check
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="wellBoreProfile"
                                    checked={value && value.wellBoreProfile === 'Horizontal'}
                                    onClick={handleInputChange}
                                    value="Horizontal"
                                    label="Horizontal"
                                    type="radio"
                                    id="custom-inline-checkbox-2"
                                />
                                <Form.Check
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="wellBoreProfile"
                                    checked={value && value.wellBoreProfile === 'Directional'}
                                    onClick={handleInputChange}
                                    value="Directional"
                                    label="Directional"
                                    type="radio"
                                    id="custom-inline-checkbox-3"
                                />
                                <Form.Check
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="wellBoreProfile"
                                    checked={value && value.wellBoreProfile === 'Sidetrack'}
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
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="surfaceLocation"
                                    checked={value && value.surfaceLocation === 'Land'}
                                    onClick={handleInputChange}
                                    value="Land"
                                    label="Land"
                                    type="radio"
                                    id="custom-inline-radio-1"
                                />
                                <Form.Check
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="surfaceLocation"
                                    checked={value && value.surfaceLocation === 'Bay/Estuary'}
                                    onClick={handleInputChange}
                                    value="Bay/Estuary"
                                    label="Bay/Estuary"
                                    type="radio"
                                    id="custom-inline-radio-2"
                                />
                                <Form.Check
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="surfaceLocation"
                                    checked={value && value.surfaceLocation === 'Inland Waterway'}
                                    onClick={handleInputChange}
                                    value="Inland Waterway"
                                    label="Inland Waterway"
                                    type="radio"
                                    id="custom-inline-radio-3"
                                />
                                <Form.Check
                                    disabled={readOnly}
                                    custom
                                    inline
                                    name="surfaceLocation"
                                    checked={value && value.surfaceLocation === 'Offshore'}
                                    onClick={handleInputChange}
                                    value="Offshore"
                                    label="Offshore"
                                    type="radio"
                                    id="custom-inline-radio-4"
                                />
                            </BoxInput>
                        </Col>
                    </Row>
                    {viewMode
                        ? <Link to={`/submit/well/update/${props.api}`}>
                            <Button style={style.button}>Edit</Button>
                        </Link>
                        : <>
                            <Button
                                style={style.button}
                                onClick={() => props.history.goBack()}
                                className="mr-2"
                            >
                                go back</Button>
                            <Button
                                style={style.button}
                                type="submit"
                            >
                                Submit</Button>
                        </>
                    }
                </Card>
            </form>
        </PageWrapper>
    )
}

export default WellForm;