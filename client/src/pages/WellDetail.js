import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { Col, Row } from "../components/Grid";
import API from "../utils/API";
import WellTableProd from "../components/TableProd";


const styles = {
    graph: {
        "height": "100vh"
    }
}

class WellDetail extends React.Component {
    state = {
        well: []
    };

    componentDidMount() {
        API.getWellId(this.props.match.params.id)
            .then(res => {
                this.setState({ well: res.data })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <PageWrapper>
                <div style={styles.graph}>
                    <Link to={"/welltable/" + this.props.match.params.id + "/prod"}>
                        <Button>Add Prod</Button>
                    </Link>
                    <GraphLine />
                    <GraphBar />
                    <Map well={this.state.well} />
                    <WellTableProd welldata={this.state.well} />
                </div>
            </PageWrapper>
        )
    }
}

export default WellDetail;