import React from 'react'

import BodyRow from './Row/BodyRow';

const Body = props => {
    return (
        <tbody>
            {
                props.data.map(e => {
                    return <BodyRow data={e} />
                })
            }
        </tbody>
    )
}

export default Body
