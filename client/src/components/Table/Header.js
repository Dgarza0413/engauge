import React from 'react'

import {
    FILTERED_PRODUCTION_TABLE,
    FILTERED_WELL_TABLE,
    INCLUDED_WELL_TABLE,
    FILTERED_MONGODB_VALUES
} from '../../utils/FilteredValues';

const Header = (props) => {
    return (
        <thead>
            <tr>
                {
                    Object
                        .keys(props.data[0] || [])
                        .map(e => {
                            if ([...FILTERED_PRODUCTION_TABLE, ...FILTERED_WELL_TABLE].includes(e)) {
                                return
                            } else if (e === 'isOn') {
                                return
                            } else {
                                return (
                                    <th key={e}>
                                        {e}
                                    </th>
                                )
                            }
                        })
                }
                {props.type === "report" || props.type === "production"
                    ? null
                    : <th>Online</th>
                }

            </tr>
        </thead>
    )
}

export default Header
