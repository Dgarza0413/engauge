import React from "react";
import Table from "../components/Table";

class WellTable extends React.Component {
    state = {

    };


    render() {
        return (
            <div>
            <Table striped bordered hover wellArr={this.state.whatever} />
            </div>
        )
    }
}

export default WellTable;