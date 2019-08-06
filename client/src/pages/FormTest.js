import React from "react";
import TestForm from "../components/TestForm";
import PageWrapper from "../components/PageWrapper";

class FormTest extends React.Component {
    render() {
        return (
            <PageWrapper>
                <h1>Form test</h1>
                <TestForm />
            </PageWrapper>
        )
    }
}

export default FormTest;