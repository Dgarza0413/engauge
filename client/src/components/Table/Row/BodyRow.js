import React from 'react'
import { FILTERED_PRODUCTION_TABLE } from '../../../utils/FilteredValues';


const BodyRow = (props) => {
    return (
        <tr>
            {Object
                .entries(props.data)
                .map(e => {
                    if (FILTERED_PRODUCTION_TABLE.includes(e[0])) {
                        return
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
