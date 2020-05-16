import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import SectionTitle from "../SectionTitle/index";

// components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const WellInfoList = ({ wellData }) => {
    const { wellName, wellNum, apiNum, operator, leaseName, county } = wellData

    const classes = useStyles();

    return (
        <div>
            <Card>
                <SectionTitle>General Details</SectionTitle>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            disabled
                            // value={moment(value.date).format("YYYY-MM-DD") || ""}
                            value={wellName}
                            name="wellName"
                            type="string"
                            label="well name"
                            // variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            disabled
                            value={wellNum}
                            name="wellNum"
                            type="number"
                            label="well number"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            disabled
                            value={wellData.wellType}
                            name="wellType"
                            type="string"
                            label="well Type"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            disabled
                            value={apiNum}
                            name="apiNum"
                            type="number"
                            label="API number"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            disabled
                            value={operator ? operator : "no data available"}
                            name="operator"
                            type="string"
                            label="operator"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            disabled
                            value={leaseName ? leaseName : "no data available"}
                            name="leaseName"
                            type="string"
                            label="lease Name"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            disabled
                            value={county ? county : "no data"}
                            name="county"
                            type="string"
                            label="county"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div>Location:</div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Link to={{
                            pathname: '/well/' + wellData._id + '/update',
                            aboutProps: {
                                wellName: wellName,
                                wellNum: wellNum,
                                apiNum: apiNum,
                                operator: operator,
                                county: county
                            }
                        }}>
                            <Button
                                variant="contained"
                                color="primary">Edit Well Data</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default WellInfoList;