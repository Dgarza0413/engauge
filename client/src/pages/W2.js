import React from "react";
import { W2Form } from "../components/FormInput";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";

const W2 = () => {
    return (
        <PageWrapper>
            <SectionTitle>Form W-2</SectionTitle>
            <W2Form />
        </PageWrapper>
    )
}

export default W2;