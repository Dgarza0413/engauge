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
<<<<<<< HEAD
            <PageWrapper>
                <Table wells={this.state.wells} />
            </PageWrapper>
=======
            <div>
            <Table striped bordered hover wellArr={this.state.whatever} />
            </div>
>>>>>>> master
        )
    }
}

export default WellTable;