import React from 'react'

import W2Form from '../components/Form/W2Form';
import WellForm from '../components/Form/WellForm';
import ProdForm from '../components/Form/ProdForm';
import ReportForm from '../components/Form/ReportForm';
import RecompletionForm from '../components/Form/Recompletion';


const submit = (props) => {
    const { operation, schema, id } = props.match.params
    console.log(operation)
    console.log(schema)

    const pathComponent = (key) => {
        switch (key) {
            case 'w2':
                return <W2Form {...props} operation={operation} />
            case 'production':
                return <ProdForm {...props} operation={operation} />
            case 'report':
                return <ReportForm {...props} operation={operation} />
            case 'well':
                return <WellForm {...props} operation={operation} />
            case 'recompletion':
                return <RecompletionForm {...props} operation={operation} />
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
