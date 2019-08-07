import React from 'react';
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphSunBurst from "../components/GraphSunBurst";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
    graph: {
        "height": "400px"
    }
}

class DashBoard extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Card>
                                <div style={styles.graph}>
                                    <GraphLine />
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
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