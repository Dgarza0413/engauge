import React from "react";
import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import Axios from "axios";

class WellTable extends React.Component {
    state = {
        wells: []
    };

    componentDidMount() {
        Axios.get("/api/wells").then((res)=>{
            this.setState({wells:res.data})
        })
    }

    render() {
        return (
            <PageWrapper>
<<<<<<< HEAD
                <Table striped bordered hover wellArr={this.state.whatever} />
=======
                <Table wells={this.state.wells} />
>>>>>>> dbb29ea8c5b7e2aa44346cae2b57a226fb3c584c
            </PageWrapper>
        )
    }
}

export default WellTable;