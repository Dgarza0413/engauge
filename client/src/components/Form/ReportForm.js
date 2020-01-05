import React, { useEffect } from 'react';
import moment from 'moment';
import PageWrapper from "../PageWrapper/index";
import Card from '../Card';
import SectionTitle from '../SectionTitle';

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
                        <div className="form-group">
                            <label htmlFor="summary">Well name</label>
                            <input
                                value={value.wellName || ""}
                                onChange={handleInputChange}
                                name="wellName"
                                type="text"
                                className="form-control"
                                placeholder="well Name"
                                id="wellName"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Report title:</label>
                            <input
                                value={value.title || ""}
                                onChange={handleInputChange}
                                name="title"
                                type="text"
                                className="form-control"
                                placeholder="title"
                                id="title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Type</label>
                            <input
                                value={value.type || ""}
                                onChange={handleInputChange}
                                name="type"
                                type="text"
                                className="form-control"
                                placeholder="Field Work"
                                id="type"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="summary">summary:</label>
                            <input
                                value={value.summary || ""}
                                onChange={handleInputChange}
                                name="summary"
                                type="textArea"
                                className="form-control"
                                placeholder="summary"
                                id="summary"
                            />
                        </div>
                        <div className="form-group">
                            {/* Add controls for the date handling */}
                            <label htmlFor="supervisor">Supervisor</label>
                            <input
                                value={value.supervisor || ""}
                                onChange={handleInputChange}
                                name="supervisor"
                                type="text"
                                className="form-control"
                                placeholder="Mr. John Doe"
                                id="supervisor"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cost">Cost</label>
                            <input
                                value={value.cost || ""}
                                onChange={handleInputChange}
                                name="cost"
                                type="number"
                                className="form-control"
                                placeholder="$ 1000"
                                id="cost"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                readOnly
                                value={moment(value.date).format("YYYY-MM-DD")}
                                // onChange={handleInputChange}
                                name="date"
                                type="date"
                                className="form-control"
                                placeholder="01/01/20"
                                id="date"
                            />
                        </div>

                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </Card>
                </form>
            </PageWrapper>
        </div>
    )
}

export default ReportForm;
