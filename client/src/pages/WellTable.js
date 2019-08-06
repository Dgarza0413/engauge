import React from "react";
import Table from "../components/Table";

class WellTable extends React.Component {
    render() {
        return (
            <div>
            {/* <Button></Button> */}
            <Table striped bordered hover />
            </div>
        )
    }
}

export default WellTable;