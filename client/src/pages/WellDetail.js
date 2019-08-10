import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FlexContainer from "../components/FlexContainer";
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
        console.log(this.props.match.params.id);
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
                            <FlexContainer>
                                <SectionTitle>Well Summary</SectionTitle>
                                <Link to={"/welltable/" + this.props.match.params.id + "/prod/new"}>
                                    <Button mb="15px">Add Prod</Button>
                                </Link>
                                <Link to={"/welltable/" + this.props.match.params.id + "/recomp/new"} style={{marginLeft: "1em"}}>
                                    <Button mb="15px">Add Recompletion</Button>
                                </Link>
                                
                            </FlexContainer>
                            <Card>
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
                    <WellTableProd well={this.state.well.productionId || []}
                        key={this.state.well._id} />
                </Container>
            </PageWrapper >
        )
    }
}

export default WellDetail;