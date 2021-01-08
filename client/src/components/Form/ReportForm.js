import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import PageWrapper from "../PageWrapper/index";
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import Button from "react-bootstrap/Button";

import { StringInput, TextBoxInput } from '.';


import { Row, Col } from 'react-bootstrap';
import { style } from '../Button'

// utils
import API from "../../utils/API";

// hooks
import useInputChange from '../../hooks/useInputChange';
import useFetch from '../../hooks/useFetch';

const ReportForm = (props) => {
    const [value, handleInputChange, handleBind] = useInputChange()
    const [fetchValue, handleGetFetch] = useFetch();
    const history = useHistory();

    const { operation, id, unique } = props.match.params;
    const { apiNum } = fetchValue;
    const { api, cost, date, summary, supervisor, title, type } = value;


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (operation === 'update') {
            try {
                await API.updateSingleReport(value._id, value)
                await history.push(`/well/${id}`)
            } catch (error) {
                console.error(error)
            }
        } else if (operation === 'add') {
            try {
                await API.postWellReport(id, { api: apiNum, ...value })
                await history.push(`/well/${id}`)
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log('neither conditions have been met')
        }
    }

    const formType = (pathName) => {
        switch (pathName) {
            case "add":
                return <SectionTitle>New Report</SectionTitle>
            case "update":
                return <SectionTitle>Update Report</SectionTitle>
            default:
                break
        }
    }

    useEffect(() => {
        if (id && operation !== 'update') {
            console.log('well id fetched')
            handleGetFetch(`/api/well/${id}`)
        }
        if (operation === "update") {
            handleGetFetch(`/api/report/${unique}`)
        }
        if (props.location.aboutProps) {
            handleBind(props.location.aboutProps)
        }
    }, [])

    useEffect(() => {
        if (operation === "update") {
            handleBind(fetchValue)
        }
    }, [fetchValue])

    return (
        <PageWrapper>
            {formType(props.operation)}
            <form onSubmit={handleFormSubmit}>
                <Card>
                    <Row>
                        <Col sm={6}>
                            <StringInput
                                readOnly
                                value={operation === "add" ? new Date : operation === "update" ? value && value.date : ""}
                                onChange={handleInputChange}
                                name="date"
                                label="date"
                            />
                        </Col>
                        <Col sm={6}>
                            <StringInput
                                readOnly
                                value={apiNum || api}
                                onChange={handleInputChange}
                                name="api"
                                label="api"
                            />
                        </Col>
                        <Col xs={4}>
                            <StringInput
                                value={value.title || ""}
                                onChange={handleInputChange}
                                name="title"
                                label="Title"
                            />
                        </Col>
                        <Col xs={8}>
                            <StringInput
                                value={value.type || ""}
                                onChange={handleInputChange}
                                name="type"
                                label="Type"
                            />
                        </Col>
                        <Col xs={6}>
                            <StringInput
                                value={value.supervisor || ""}
                                onChange={handleInputChange}
                                name="supervisor"
                                label="supervisor"
                            />
                        </Col>
                        <Col xs={6}>
                            <StringInput
                                value={value.cost || ""}
                                onChange={handleInputChange}
                                name="cost"
                                label="cost"
                            />
                        </Col>
                        <Col xs={12}>
                            <TextBoxInput
                                value={value.summary || ""}
                                onChange={handleInputChange}
                                name="summary"
                                label="summary"
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
                </Card>
            </form>
        </PageWrapper >
    )
}

export default ReportForm;
