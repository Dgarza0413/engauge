import React from 'react';
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphSunBurst from "../components/GraphSunBurst";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import FlexContainer from "../components/FlexContainer";
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
                        {/* <Col lg="12">
                            <Card>
                                <SectionTitle>Production</SectionTitle>
                                <div style={styles.graph}>
                                    <GraphLine />
                                </div>
                            </Card>
                        </Col> */}
                        <Col md="4">
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">$1,034.00</SectionTitle>
                                    <p style={{marginBottom: "5px"}}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Monthly Revenue</h6>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">$1,034.00</SectionTitle>
                                    <p style={{marginBottom: "5px"}}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Oil Production</h6>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">$1,034.00</SectionTitle>
                                    <p style={{marginBottom: "5px"}}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Gas Production</h6>
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