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



    return (
        <>
            {/* <SearchBar
                setFilter={setFilter}
                setDropDown={setDropDown}
            /> */}
            <PaginationBar />
            <Card padding="0" overflow="auto">
                <Table striped bordered hover responsive size="sm" >
                    <Header data={data || []} />
                    <Body data={data || []} />
                </Table >
            </Card>
        </>
        // <>
        // <Card padding="0" overflow="auto">
        //                 <Table striped bordered hover size="sm">
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