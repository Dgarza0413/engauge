import React, { useEffect } from 'react';
import moment from 'moment';
import { Redirect } from 'react-router';
import PageWrapper from "../PageWrapper/index";
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import { StringInput, TextBoxInput, NumberInput } from '../Form';


import { TextField, InputAdornment } from "@material-ui/core";
import { Row, Col } from 'react-bootstrap';
// import TextField from "../Input/TextField";
import Modal from '../Modal/Modal';

// utils
import API from "../../utils/API";

// hooks
import useInputChange from '../../hooks/useInputChange';

const ReportForm = (props) => {
    const [value, handleInputChange, handleBind] = useInputChange()

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const pathName = props.match.path;
        const id = props.match.params.id;

        if (pathName === "/welltable/:id/report/update") {
            try {
                await API.updateWellReportData(id, value)
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                await API.postWellReport(id, value)
            } catch (error) {
                console.error(error)
            }
        }
    }

    useEffect(() => {
        if (props.location.aboutProps) {
            handleBind(props.location.aboutProps)
        }
    }, [])

    return (
        <div>
            <PageWrapper>
                <SectionTitle>Report Form</SectionTitle>
                <form onSubmit={handleFormSubmit}>
                    <Card>
                        <Row>
                            <Col xs={4}>
                                <StringInput
                                    value={moment(value.date).format("YYYY-MM-DD") || ""}
                                    onChange={handleInputChange}
                                    name="date"
                                    label="date"
                                />
                            </Col>
                            <Col xs={4}>
                                <StringInput
                                    value={value.wellName || ""}
                                    onChange={handleInputChange}
                                    name="wellName"
                                    label="well Name"
                                    placeholder="Garza"
                                />
                            </Col>
                            <Col xs={4}>
                                <StringInput
                                    value={value.wellNum || ""}
                                    onChange={handleInputChange}
                                    name="wellNum"
                                    label="well Number"
                                    placeholder="1"
                                />
                            </Col>
                            <Col xs={4}>
                                <StringInput
                                    value={value.title || ""}
                                    onChange={handleInputChange}
                                    name="title"
                                    label="report Title"
                                    placeholder="Facility clean up"
                                />
                            </Col>
                            <Col xs={8}>
                                <StringInput
                                    value={value.type || ""}
                                    onChange={handleInputChange}
                                    name="type"
                                    label="report Type"
                                    placeholder="clean up"
                                />
                            </Col>
                            <Col xs={12}>
                                <TextBoxInput
                                    label="summary"
                                    onChange={handleInputChange}
                                    value={value.summary || ""}
                                />
                            </Col>
                            <Col xs={6}>
                                <StringInput
                                    value={value.supervisor || ""}
                                    onChange={handleInputChange}
                                    name="supervisor"
                                    label="supervisor"
                                    placeholder="mr. john doe"
                                />
                            </Col>
                            <Col xs={6}>
                                <StringInput
                                    value={value.cost || ""}
                                    onChange={handleInputChange}
                                    name="cost"
                                    label="cost"
                                    placeholder="1000"
                                />
                            </Col>
                            <Col xs={3}>
                                <Modal handleFormSubmit={handleFormSubmit} />
                            </Col>
                        </Row>
                    </Card>
                </form>
            </PageWrapper>
        </div >
    )
}

export default ReportForm;
