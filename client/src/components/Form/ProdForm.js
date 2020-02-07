import React, { useState } from 'react'
import moment from 'moment';

import { Container, Row, Col } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import { NumberInput, TextBoxInput } from "../Form";
import Card from "../Card";
import Button from "../Button";
import API from "../../utils/API";

// hooks
import useInputChange from "../../hooks/useInputChange";

// styles
import "./style.css";
import PageWrapper from '../PageWrapper';
import SectionTitle from '../SectionTitle';

const ProdForm = (props) => {
    const [value, handleInputChange, handlebind] = useInputChange()

    console.log(props)

    // const handleRedirect = () => {
    //     console.log(this.props.id);
    //     if (this.state.redirect === true) {
    //         return <Redirect to={`/welltable/${this.props.id}`} />
    //     }
    // }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const id = props.match.params.id

        try {
            await API.postWellProd(id, value)
        } catch (error) {
            console.error(error)
        }
    };


    return (
        <div>
            <PageWrapper>
                <SectionTitle> Production Form</SectionTitle>
                <form onSubmit={handleFormSubmit}>
                    <Card>
                        <Container>
                            <Row>
                                <Col md="4">
                                    <label htmlFor="Date">Date</label>
                                    <input
                                        readOnly
                                        label="Date"
                                        value={moment().format("MM/DD/YYYY")}
                                        onChange={handleInputChange}
                                        name="date"
                                        type="date"
                                        className="form-control"
                                        placeholder="01/01/2020"
                                        id="date"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <NumberInput
                                        label="Oil"
                                        // value={oil}
                                        onChange={handleInputChange}
                                        name="oil"
                                        placeholder="07"
                                        unit="BBLs"
                                    />
                                </Col>
                                <Col md="4">
                                    <NumberInput
                                        label="Gas"
                                        // value={gas}
                                        onChange={handleInputChange}
                                        name="gas"
                                        placeholder="07"
                                        unit="MCF"
                                    />
                                </Col>
                                <Col md="4">
                                    <NumberInput
                                        label="Water"
                                        // value={water}
                                        onChange={handleInputChange}
                                        name="water"
                                        placeholder="07"
                                        unit="BBLs"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <NumberInput
                                        label="Casing PSI"
                                        // value={casingPSI}
                                        onChange={handleInputChange}
                                        name="casingPSI"
                                        placeholder="07"
                                        unit="PSI"
                                    />
                                </Col>
                                <Col md="4">
                                    <NumberInput
                                        label="Tubing PSI"
                                        // value={tubingPSI}
                                        onChange={handleInputChange}
                                        name="tubingPSI"
                                        placeholder="07"
                                        unit="PSI"
                                    />
                                </Col>
                                <Col md="4">
                                    <NumberInput
                                        label="Choke Size"
                                        // value={choke}
                                        onChange={handleInputChange}
                                        name="choke"
                                        placeholder="07"
                                        unit="/64"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TextBoxInput
                                        label="Comments"
                                        placeholder="Enter Comments Here..."
                                    />
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

export default ProdForm;