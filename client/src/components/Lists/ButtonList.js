import React from 'react';
import { Link, Redirect } from "react-router-dom";
import FlexContainer from '../FlexContainer';
import Button from '../Button/index';
import SectionTitle from "../SectionTitle/index";

const ButtonList = ({ id }) => {

    return (
        <div>
            <FlexContainer>
                <SectionTitle>Well Summary</SectionTitle>
                <Link to={
                    {
                        pathname: '/welltable/' + id + '/prod/new',
                        // aboutProps: {
                        //     wellName: wellName,
                        //     wellNum: wellNum
                        // }
                    }
                }>
                    <Button mb="15px">+ Production</Button>
                </Link>
                <Link to={{ pathname: '/welltable/' + id + '/recomp/new', }}
                    style={{ marginLeft: '1em' }}
                >
                    <Button mb="15px">+ Recompletion</Button>
                </Link>
                <Link
                    to={{ pathname: '/welltable/' + id + '/report/new', }}
                    style={{ marginLeft: '1em' }}
                >
                    <Button mb="15px">+ Report</Button>
                </Link>
                <Link
                    to={{ pathname: '/well/' + id + '/update', }}
                    style={{ marginLeft: '1em' }}
                >
                    <Button mb="15px">Update WellData</Button>
                </Link>
            </FlexContainer>
        </div>
    )
}

export default ButtonList;