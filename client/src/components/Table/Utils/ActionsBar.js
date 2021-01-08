import React from 'react';
import Button from 'react-bootstrap/Button';

const ActionsBar = () => {
    const handleDeleteButton = () => {
        console.log('delete')
    }

    const handleUpdateButton = () => {
        console.log('update')
    }

    return (
        <>
            <Button>
                Delete
        </Button>
            <Button>
                Update
        </Button>
        </>
    )
}

export default ActionsBar
