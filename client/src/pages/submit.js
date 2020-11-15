import React from 'react'

const submit = (props) => {
    const pathComponent = (key) => {
        switch (key) {
            case 'w2':
                return console.log('w2')
            default:
                break;
        }
    }

    return (
        <div>
            {pathComponent('w2')}
        </div>
    )
}

export default submit
