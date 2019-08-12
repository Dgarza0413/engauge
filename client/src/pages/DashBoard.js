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

// const reduceMap = this.state.well.map(element => element.oil).reduce(accumulator, currentValue => accumulator + currentValue)


class DashBoard extends React.Component {
    state = {
        well: {}
    };

    componentDidMount() {
        API.getAllProd()
            .then(res => {
                // this.setState({ well: res.data })
                // const dates = [];
                // const dataByDate = dates.map(c => {
                //     res.data.filter(d => d.date === c)
                // })
                window.mydata = res.data;
                const result = res.data.map(a => a.casingPSI).reduce((acc, cur) => acc + cur, 0)
                this.setState({ well: result })
                console.log(result)
            })
            .catch(err => console.log(err))

    };
    map = () => {
        // this.state.well.map(data => data.oil).reduce(data.oil, data.oil => data.oil + )
        console.log(this.state.well)
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
                                    {/* <GraphLine well={this.state.well || []} /> */}
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