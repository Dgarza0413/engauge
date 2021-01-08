import React from "react";
import Table from "react-bootstrap/Table";
import Card from "../Card";

import Body from './Body';
import Header from './Header';

import "./style.css";

const WellTable = (props) => {
    const { data } = props;

    return (
        <>
            <Card padding="0" overflow="auto">
                <Table striped bordered hover size="sm">
                    <Header {...props} data={data || []} />
                    <Body {...props} data={data || []} />
                </Table >
            </Card>
        </>
    )
}

export default WellTable;