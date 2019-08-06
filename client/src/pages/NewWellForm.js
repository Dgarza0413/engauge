import React from "react";
import WellForm from "../components/FormInput";
import PageWrapper from "../components/PageWrapper";

class NewWellForm extends React.Component {
    render() {
        return (
            <PageWrapper>
                <WellForm />
            </PageWrapper>
        )
    }
}

export default NewWellForm;