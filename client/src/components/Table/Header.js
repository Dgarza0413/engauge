import React from 'react'

import { FILTERED_PRODUCTION_TABLE } from '../../utils/FilteredValues';

const Header = (props) => {
    return (
        <thead>
            <tr>
                {
                    Object
                        .keys(props.data[0] || [])
                        .map(e => {
                            if (FILTERED_PRODUCTION_TABLE.includes(e)) {
                                return
                            } else {
                                return (
                                    <th>
                                        {e}
                                    </th>
                                )
                            }
                        })
                }
            </tr>
        </thead>
    )
}

export default Header
