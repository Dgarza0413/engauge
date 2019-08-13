import React from "react";
import { WellForm } from "../components/FormInput";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";

class NewWellForm extends React.Component {
    render() {
        return (
            <PageWrapper>
                <SectionTitle>New Well Form</SectionTitle>
                <WellForm />
            </PageWrapper>
        )
    }
}

export default NewWellForm;