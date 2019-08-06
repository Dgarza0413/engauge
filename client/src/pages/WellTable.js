import React from "react";
import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";

class WellTable extends React.Component {
    state = {

    };


    render() {
        return (
            <PageWrapper>
                <Table striped bordered hover wellArr={this.state.whatever} />
            </PageWrapper>
        )
    }
}

export default WellTable;