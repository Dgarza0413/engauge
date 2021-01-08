import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "../Card";
// import SearchBar from './SearchBar.js';
import PaginationBar from '../Pagination';

import Body from './Body';
import Header from './Header';

import "./style.css";

const WellTable = (props) => {
    // const [filter, setFilter] = useState();
    // const [dropDown, setDropDown] = useState('dropDown')
    const { data } = props;

    console.log(props)

    return (
        <>
            {/* <SearchBar
                setFilter={setFilter}
                setDropDown={setDropDown}
            /> */}
            {/* <PaginationBar /> */}
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