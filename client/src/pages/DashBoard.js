import React from 'react';
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphSunBurst from "../components/GraphSunBurst";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import API from "../utils/API"

const styles = {
    graph: {
        "height": "400px"
    }
}

class DashBoard extends React.Component {
    state = {
        well: {}
    };

    componentDidMount() {
        API.getAllProd()
            .then(res => {
                this.setState({ well: res.data })
                console.log(res.data)
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
                                <SectionTitle>Production</SectionTitle>
                                <div style={styles.graph}>
                                    <GraphLine well={this.state.well.productionId || []} />
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Well Status</SectionTitle>
                                <div style={styles.graph}>
                                    <GraphPie />
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <div style={styles.graph}>
                                    <GraphSunBurst />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </PageWrapper>
        )
    }
}

export default DashBoard;