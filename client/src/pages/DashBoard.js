import React from 'react';
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphBar from "../components/GraphBar";
import GraphSunBurst from "../components/GraphSunBurst";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import FlexContainer from "../components/FlexContainer";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import API from "../utils/API"

const styles = {
    graph: {
        "height": "25vw"
    }
}

class DashBoard extends React.Component {
    state = {
        wellData: {},
        prodData: {},
        prodOil: {},
        prodGas: {},
        isOnTotal: {},
        isOffTotal: {}
    };

    componentDidMount() {
        API.getAllProd()
            .then(res => {
                const distinct = (value, index, self) => {
                    return self.indexOf(value) === index
                }
                console.log(res.data)
                console.log(res.data.map(prodData => moment(prodData.date).format("MM/DD/YYYY"))
                    .filter(prodData => prodData.date !== prodData.date ? prodData.date : []))
                console.log("QXC");
                console.log(res.data.map(prodData => moment(prodData.date).format("MM/DD/YYYY")).filter(distinct))

                // console.log(res.data.map(prodData => prodData.oil).reduce(function (accumulator, prod) { return accumulator + prod }))
                // console.log(res.data.map(prodData => prodData.oil))
                // console.log(res.data.reduce(prodData => prodData === prodData))
                this.setState({
                    prodDate: res.data.map(prodData => prodData),
                    wellData: res.data.map(prodData => (prodData.oil))
                })
                console.log(this.state.wellData)
            })
            .catch(err => console.log(err))

        API.getAllWells()
            .then(res => {
                this.setState({
                    isOffTotal: res.data.map(status => status.isOn).filter(v => v === false).length,
                    isOnTotal: res.data.map(status => status.isOn).filter(v => v === true).length
                })
            })
            .catch(err => console.log(err))

    };

    render() {
        return (
            <PageWrapper>
                <Container>
                    <Row>
                    < Col md="4" >
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">$1,034.00</SectionTitle>
                                    <p style={{ marginBottom: "5px" }}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Monthly Revenue</h6>
                            </Card>
                        </Col >
                        <Col md="4">
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">$1,034.00</SectionTitle>
                                    <p style={{ marginBottom: "5px" }}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Oil Production</h6>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                <FlexContainer>
                                    <SectionTitle mb="5px">$1,034.00</SectionTitle>
                                    <p style={{ marginBottom: "5px" }}><strong>+0.20%</strong></p>
                                </FlexContainer>
                                <h6 className="mb-0">Gas Production</h6>
                            </Card>
                        </Col>
                        <Col lg="12">
                            <Card>
                                <SectionTitle>Production</SectionTitle>
                                <div style={styles.graph}>
                                    {/* <GraphLine well={this.state.wellData || []} /> */}
                                    {/* <GraphLine /> */}
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Well Status</SectionTitle>
                                <div style={styles.graph}>
                                    <GraphPie wellIsOn={this.state.isOnTotal}
                                        wellIsOff={this.state.isOffTotal} />
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
                    </Row >
                </Container >
            </PageWrapper >
        )
    }
}

export default DashBoard;