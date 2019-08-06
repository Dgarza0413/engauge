import React from "react";
import { W2Form } from "../components/FormInput";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";

class W2 extends React.Component {
    render() {
        return (
            <PageWrapper>
                <SectionTitle>Form W-2</SectionTitle>
                <W2Form />
            </PageWrapper>
        )
    }
}

export default W2;