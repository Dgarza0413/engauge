import React from 'react'

import WellForm from '../components/Form/WellForm';



const submit = (props) => {
    const { operation, schema, id } = props.match.params

    const pathComponent = (key) => {
        switch (key) {
            case 'w2':
                return console.log('w2');
            case 'production':
                return console.log('production');
            case 'report':
                return console.log('report');
            case 'well':
                return <WellForm {...props} operation={operation} />
            default:
                break;
        }
    }

    return (
        <>
            {pathComponent(schema)}
        </>
    )
}

export default submit
