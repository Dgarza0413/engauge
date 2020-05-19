import React from "react";
import WellForm from "./WellForm";
import PageWrapper from "../PageWrapper";
import SectionTitle from "../SectionTitle";

const NewWellForm = (props) => {
    const pathName = props.match.path
    return (
        <PageWrapper>
            {
                pathName === "/well/:id/update"
                    ? <SectionTitle>Update Well Form</SectionTitle>
                    : <SectionTitle>New Well Form</SectionTitle>
            }
            <WellForm />
        </PageWrapper>
    )
}

export default NewWellForm;