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
import API from "../utils/API"

const styles = {
    graph: {
        "height": "400px"
    }
}

// const reduceMap = this.state.well.map(element => element.oil).reduce(accumulator, currentValue => accumulator + currentValue)


class DashBoard extends React.Component {
    state = {
        wellData: {},
        prodData: {},
        prodOil: {},
        prodGas: {}
    };

    componentDidMount() {
        API.getAllProd()
            .then(res => {
                // console.log(res.data)
                console.log(res.data.map(prodData => prodData))
                // console.log(res.data.map(prodData => prodData.oil).reduce(function (accumulator, prod) { return accumulator + prod }))
                // console.log(res.data.map(prodData => prodData.oil))
                // console.log(res.data.reduce(prodData => prodData === prodData))
                this.setState({
                    prodDate: res.data.map(prodData => prodData),
                    wellData: res.data.map(prodData => (prodData.oil))
                })
                console.log(this.state.wellData)
            })
            // .then(res => {
            //     this.setState({ well: res.data })
            //     console.log(res.data)
            //     const dates = [];
            //     const dataByDate = dates.map(c => {
            //         res.data.filter(d => d.date === c)
            //     })
            // window.mydata = res.data;
            // const result = res.data.map(a => a.casingPSI).reduce((acc, cur) => acc + cur, 0)
            // this.setState({ well: result })
            // console.log(result)
            // })
            .catch(err => console.log(err))

    };

    render() {
        return (
            <PageWrapper>
                <Container>
                    <Row>
                        {/* <Col lg="12">
                            <Card>
                                <SectionTitle>Production</SectionTitle>
                                <div style={styles.graph}>
                                    {/* <GraphLine well={this.state.prodData || []} /> */}
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
                                    <GraphBar />
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