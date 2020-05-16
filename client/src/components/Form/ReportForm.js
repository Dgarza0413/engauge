import React, { useEffect } from 'react';
import moment from 'moment';
import { Redirect } from 'react-router';
import PageWrapper from "../PageWrapper/index";
import Card from '../Card';
import SectionTitle from '../SectionTitle';


import { Grid, Paper, TextField, InputAdornment, Button } from "@material-ui/core";
// import TextField from "../Input/TextField";
import Modal from '../Modal/Modal';

// utils
import API from "../../utils/API";

// hooks
import useInputChange from '../../hooks/useInputChange';

const ReportForm = (props) => {
    const [value, handleInputChange, handleBind] = useInputChange()

    console.log(value)

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
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <TextField
                                    value={moment(value.date).format("YYYY-MM-DD") || ""}
                                    onChange={handleInputChange}
                                    name="date"
                                    type="date"
                                    label="Date"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    value={value.wellName || ""}
                                    onChange={handleInputChange}
                                    name="wellName"
                                    label="well Name"
                                    placeholder="Garza"
                                    helperText="numbers can be included"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField
                                    value={value.wellNum || ""}
                                    onChange={handleInputChange}
                                    name="wellNum"
                                    label="well Number"
                                    type="number"
                                    placeholder="1"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    value={value.title || ""}
                                    onChange={handleInputChange}
                                    name="title"
                                    label="Report Title"
                                    placeholder="Facilites clean up"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    value={value.type || ""}
                                    onChange={handleInputChange}
                                    name="type"
                                    label="Report Type"
                                    placeholder="facilities"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    value={value.summary || ""}
                                    onChange={handleInputChange}
                                    name="summary"
                                    label="summary"
                                    placeholder="...information"
                                    helperText=""
                                    InputLabelProps={{ shrink: true }}
                                    multiline={true}
                                    rows="6"
                                    variant="filled"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    value={value.supervisor || ""}
                                    onChange={handleInputChange}
                                    name="supervisor"
                                    label="supervisor"
                                    placeholder="Mr. John Doe"
                                    InputLabelProps={{ shrink: true }}
                                    helperText=""
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    value={value.cost || ""}
                                    onChange={handleInputChange}
                                    name="cost"
                                    label="cost"
                                    type="number"
                                    placeholder="1000"
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Modal handleFormSubmit={handleFormSubmit} />
                            </Grid>
                        </Grid>
                    </Card>
                </form>
            </PageWrapper>
        </div>
    )
}

export default ReportForm;
