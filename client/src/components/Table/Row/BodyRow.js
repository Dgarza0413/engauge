import React from 'react';
import { Link } from 'react-router-dom';
import { FILTERED_PRODUCTION_TABLE, FILTERED_WELL_TABLE } from '../../../utils/FilteredValues';
import ToggleButton from "../../Button/ToggleButton";

import UpdateButton from '../Utils/UpdateButton';

const BodyRow = (props) => {
    const { data, type } = props

    console.log(props)

    return (
        <tr>
            {Object
                .entries(props.data)
                .map(e => {
                    if ([...FILTERED_PRODUCTION_TABLE, ...FILTERED_WELL_TABLE].includes(e[0])) {
                        return
                    } else if (e[0] === 'isOn') {
                        return
                    } else if (e[0] === 'apiNum') {
                        return (
                            <td key={e[1]}>
                                <Link to={`/well/${e[1]}`}>
                                    {e[1]}
                                </Link>
                            </td>
                        )
                    } else if (e[0] === 'summary') {
                        return (
                            <td className="d-inline-block text-truncate" style={{ maxWidth: '300px' }}>
                                {e[1]}
                                <span>Read More</span>
                            </td>
                        )
                    } else if (e[0] === 'date') {
                        const created = new Date(e[1]);
                        const date = created.getDate();
                        const month = created.getMonth() + 1;
                        const year = created.getFullYear();
                        const dateString = `${month}/${date}/${year}`
                        return (
                            <td key={e[1]} >
                                { dateString}
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
            {type === 'report' || type === 'production'
                ? null
                : <td>
                    <ToggleButton
                        isOn={data.isOn}
                        name={data.wellName}
                        id={data._id}
                    />
                </td>
            }
            <td>
                {type === 'report' ? <UpdateButton reportId={data.reportId} schema={type} api={data.api} /> : ""}
            </td>
        </tr >
    )
}

export default BodyRow
