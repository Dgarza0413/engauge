import React from 'react'
import propTypes from 'prop-types'

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

Body.propTypes = {

}

export default Body
