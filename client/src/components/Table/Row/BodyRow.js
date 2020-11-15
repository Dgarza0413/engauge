import React from 'react';
import { Link } from 'react-router-dom';
import { FILTERED_PRODUCTION_TABLE, FILTERED_WELL_TABLE } from '../../../utils/FilteredValues';
import ToggleButton from "../../Button/ToggleButton";


const BodyRow = (props) => {
    // console.log(props)
    const handleRowClick = (e) => {
        console.log(e)
    }

    return (
        <tr onClick={handleRowClick}>
            {Object
                .entries(props.data)
                .map(e => {
                    console.log(e)
                    if ([...FILTERED_PRODUCTION_TABLE, ...FILTERED_WELL_TABLE].includes(e[0])) {
                        return
                    } else if (e[0] === 'isOn') {
                        return (
                            <td>
                                <ToggleButton
                                    isOn={e[0]}
                                // name={well.wellName}
                                // id={well._id}
                                />
                            </td>
                        )
                    } else if (e[0] === 'apiNum') {
                        return (
                            <Link to={`/welltable/${e[1]}`}>
                                <td>
                                    {e[1]}
                                </td>
                            </Link>
                        )
                    } else if (e[0] === 'date') {
                        const created = new Date(e[1]);
                        const date = created.getDate();
                        const month = created.getMonth();
                        const year = created.getFullYear();
                        const hour = created.getHours();
                        const minutes = created.getMinutes();

                        const dateString = `${month}/${date}/${year}`
                        return (
                            <td>
                                {dateString}
                            </td>
                        )
                    } else {
                        return (
                            <td>
                                {e[1]}
                            </td>
                        )
                    }
                })}
        </tr>
    )
}

export default BodyRow
