import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import WellTableProd from "../components/TableProd"

const styles = {
    graph: {
        "height": "100vh"
    }
}

class WellDetail extends React.Component {
    render() {
        return (
            <PageWrapper>
                <div style={styles.graph}>
                    <Link to={"/welltable/" + this.props.match.params.id + "/prod/new"}>
                        <Button>Add Prod</Button>
                    </Link>
                    <GraphLine well={this.state.well.productionId || []}
                        key={this.state.well._id} />
                    <GraphBar />
                    <Map well={this.state.well} />
                    <WellTableProd well={this.state.well.productionId || []}
                        key={this.state.well._id} />
                </div>
            </PageWrapper>
        )
    }
}

export default WellDetail;