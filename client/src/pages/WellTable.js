import React from "react";
import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import Axios from "axios";

class WellTable extends React.Component {
    state = {
        wells: []
    };

    componentDidMount() {
        Axios.get("/api/wells").then((res) => {
            this.setState({ wells: res.data })
        })
    }

    render() {
        return (
            <PageWrapper>
                <Table wells={this.state.wells} />
            </PageWrapper>
        )
    }
}

export default WellTable;