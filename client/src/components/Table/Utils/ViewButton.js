import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const ViewButton = (props) => {
    console.log(props)
    return (
        <Link to={`/submit/${props.schema}/update/${props.api}`}>
            <Button>
                View
            </Button>
        </Link>
    )
}

export default ViewButton
