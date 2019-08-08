import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
<<<<<<< HEAD
// import Axios from "axios";
=======
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import { Col, Row } from "../components/Grid";
import API from "../utils/API";
import WellTableProd from "../components/TableProd";

>>>>>>> master

const styles = {
    graph: {
        "height": "100vh"
    }
}

class WellDetail extends React.Component {
<<<<<<< HEAD
    // state = {
        
    // }
=======
    state = {
        well: {}
    };

    componentDidMount() {
        API.getWellId(this.props.match.params.id)
            .then(res => {
                this.setState({ well: res.data })
                console.log(res.data.productionId)
            })
            .catch(err => console.log(err))
    }

>>>>>>> master
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