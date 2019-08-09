import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import API from "../utils/API";
import WellTableProd from "../components/TableProd";
import Card from "../components/Card";

import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../components/SectionTitle";



const styles = {
    graph: {
        "height": "100vh"
    }
}

class WellDetail extends React.Component {
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

    render() {
        return (
            <PageWrapper>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Card>
                                <Link to={"/welltable/" + this.props.match.params.id + "/prod/new"}>
                                    <Button>Add Prod</Button>
                                </Link>
                                <Link to={"/welltable/" + this.props.match.params.id + "/recomp/new"}>
                                    <Button>Add Recompletion</Button>
                                </Link>
                                <SectionTitle>Well Summary</SectionTitle>
                                <div style={styles.graph}>
                                    <GraphLine well={this.state.well.productionId || []} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <div style={styles.graph}>
                                    <Map well={this.state.well} />
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <div style={styles.graph}>
                                    <GraphBar />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Card>
                        <WellTableProd well={this.state.well.productionId || []}
                            key={this.state.well._id} />
                    </Card>
                </Container>
            </PageWrapper >
        )
    }
}

export default WellDetail;