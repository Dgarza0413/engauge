import React from 'react';
import { Link } from "react-router-dom";

//components
import FlexContainer from '../FlexContainer';
import SectionTitle from "../SectionTitle/index";

// 3rd party components
import { Grid, Button } from "@material-ui/core";


const ButtonList = ({ id }) => {
    return (
        <div>
            <FlexContainer>
                <SectionTitle>Well Summary</SectionTitle>
                <Grid container>
                    <Grid item xs={3}>
                        <Link to={{ pathname: '/welltable/' + id + '/prod/new' }}>
                            <Button variant="contained" color="primary">+ Production</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to={{ pathname: '/welltable/' + id + '/recomp/new', }}>
                            <Button variant="contained" color="primary">+ Recompletion</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to={{ pathname: '/welltable/' + id + '/report/new', }}>
                            <Button variant="contained" color="primary">+ Report</Button>
                        </Link>
                    </Grid>
                </Grid>
            </FlexContainer>
        </div>
    )
}

export default ButtonList;