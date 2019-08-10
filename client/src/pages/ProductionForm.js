import React from "react";
import { Production } from "../components/FormInput";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";

function ProductionForm(props) {
    return (
        <PageWrapper>
            <SectionTitle>Production Form</SectionTitle>
            <Production id={props.match.params.id}/>
        </PageWrapper>
    );
}

export default ProductionForm;