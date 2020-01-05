import React from "react";
// import { Production } from "../components/FormInput";
import ProdForm from "../components/Form/ProdForm";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";

const Production = (props) => {
    return (
        <PageWrapper>
            <SectionTitle>Production Form</SectionTitle>
            <ProdForm props={props} />
        </PageWrapper>
    );
}

export default Production;