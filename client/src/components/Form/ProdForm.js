import React from 'react'
import moment from 'moment';

import { Container, Row, Col } from "react-bootstrap";
import { NumberInput, TextBoxInput, StringInput } from "../Form";
import { Redirect } from 'react-router-dom';
import Card from "../Card";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

import { style } from '../Button';

// hooks
import useInputChange from "../../hooks/useInputChange";
import useFetch from '../../hooks/useFetch';

// styles
import "./style.css";
import PageWrapper from '../PageWrapper';
import SectionTitle from '../SectionTitle';

const ProdForm = (props) => {
    const [value, handleInputChange, handleBind] = useInputChange()
    const [fetchValue, handleGetFetch] = useFetch();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const id = props.match.params.id
        try {
            await API.postWellProd(id, value)
            await <Redirect to="/dashboard" />;
        } catch (error) {
            console.error(error)
        }
    };

    const formType = (pathName) => {
        switch (pathName) {
            case "add":
                return <SectionTitle>New Production</SectionTitle>
            case "update":
                return <SectionTitle>Update Production</SectionTitle>
            default:
                break
        }
    }

    return (
        <div>
            <PageWrapper>
                {formType(props.operation)}
                <form onSubmit={handleFormSubmit}>
                    <Card>
                        <Container>
                            <Row>
                                <Col md="4">
                                    <StringInput
                                        label="Date"
                                        value={moment().format("MM/DD/YYYY")}
                                        onChange={handleInputChange}
                                        name="date"
                                        placeholder={moment().format("MM/DD/YYYY")}
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
                                <Col xs={12}>
                                    <TextBoxInput
                                        label="Comments"
                                        placeholder="Enter Comments Here..."
                                        name="comments"
                                    />
                                </Col>
                                <Col xs={4}>
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
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </form>
            </PageWrapper>
        </div>
    )
}

export default ProdForm;