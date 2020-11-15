import React, { useState } from "react";
import ToggleButton from "../Button/ToggleButton";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Card from "../Card";
import SearchBar from './SearchBar.js';

import Body from './Body';
import Header from './Header';

import "./style.css";
import SiteRow from "./Row/Site";

const WellTable = (props) => {
    const [filter, setFilter] = useState();
    const [dropDown, setDropDown] = useState('dropDown')
    const { wells, data } = props;

    return (
        <Card padding="0" overflow="auto">
            < Table striped bordered hover responsive size="sm" >
                <Header data={data} />
                <Body data={data} />
            </Table >
        </Card>
        // <>
        //          <SearchBar
        //                 setFilter={setFilter}
        //                 setDropDown={setDropDown}
        //             /> 
        // <Card padding="0" overflow="auto">
        //                 <Table striped bordered hover size="sm">
        //                     <thead>
        //                         <tr>
        //                             <th>Well Name</th>
        //                             <th>Well Number</th>
        //                             <th>API Number</th>
        //                             <th>Status</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {wells
        //                             .filter(well => {
        //                                 // return well[this.state.dropDown].toString().startsWith(this.state.filter.toLowerCase());
        //                                 return filter
        //                                     ? well.wellName.startsWith(filter)
        //                                     : well
        //                             })
        //                             .map(well => {
        //                                 return (
        //                                     <tr key={well._id}>
        //                                         <td>
        //                                             <Link to={{
        //                                                 pathname: "/welltable/" + well._id,
        //                                                 aboutProps: {
        //                                                     wellName: well.wellName,
        //                                                     wellNumber: well.wellNum
        //                                                 }
        //                                             }}>
        //                                                 {well.wellName}
        //                                             </Link>
        //                                         </td>
        //                                         <td>{well.wellNum}</td>
        //                                         <td>{well.apiNum}</td>
        //                                         <td>
        //                                             <ToggleButton
        //                                                 isOn={well.isOn}
        //                                                 name={well.wellName}
        //                                                 id={well._id}
        //                                             />
        //                                         </td>
        //                                     </tr>
        //                                 )
        //                             })}
        //                     </tbody>
        //                 </Table>
        //             </Card> 
        //          </>
    )
}

export default WellTable;