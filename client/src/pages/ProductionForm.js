import React from "react";
import { Production } from "../components/FormInput";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";

function ProductionForm() {
    return (
        <PageWrapper>
            <SectionTitle>Production Form</SectionTitle>
            <Production />
        </PageWrapper>
    );
}

export default ProductionForm;