import React from 'react'
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { W2Form } from "../components/FormInput";


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
        <PageWrapper>
            <SectionTitle></SectionTitle>
            {pathComponent('w2')}
        </PageWrapper>
    )
}

export default submit
