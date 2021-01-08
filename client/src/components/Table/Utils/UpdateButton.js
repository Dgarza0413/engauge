import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const UpdateButton = (props) => {
    console.log(props)
    return (
        <Link to={`/submit/${props.schema}/update/${props.api}/${props.reportId ? props.reportId : ""}`}>
            <Button>
                Update
            </Button>
        </Link>
    )
}

export default UpdateButton
