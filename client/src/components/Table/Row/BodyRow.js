import React from 'react';
import { Link } from 'react-router-dom';
import { FILTERED_PRODUCTION_TABLE, FILTERED_WELL_TABLE } from '../../../utils/FilteredValues';
import ToggleButton from "../../Button/ToggleButton";

const BodyRow = (props) => {
    const { data } = props

    return (
        <tr>
            {Object
                .entries(props.data)
                .map(e => {
                    if ([...FILTERED_PRODUCTION_TABLE, ...FILTERED_WELL_TABLE].includes(e[0])) {
                        return
                    } else if (e[0] === 'isOn') {
                        return (
                            <td key={e[1]}>
                                {e[1]}
                            </td>
                        )
                    } else if (e[0] === 'apiNum') {
                        return (
                            <td key={e[1]}>
                                <Link to={`/well/${e[1]}`}>
                                    {e[1]}
                                </Link>
                            </td>
                        )
                    } else if (e[0] === 'date') {
                        const created = new Date(e[1]);
                        const date = created.getDate();
                        const month = created.getMonth();
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
            {data.reportId
                ? null
                : <td>
                    <ToggleButton
                        isOn={data.isOn}
                        name={data.wellName}
                        id={data._id}
                    />
                </td>
            }
        </tr >
    )
}

export default BodyRow
