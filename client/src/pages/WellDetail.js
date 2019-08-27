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
        well: {},
        tempLat: null, // 30.266926,
        tempLng: null //-97.750519
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        API.getWellId(this.props.match.params.id)
            .then(res => {
                const totalGas = res.data.productionId.map(prodData => prodData.gas).reduce(function (accumulator, prod) { return accumulator + prod })
                const totalOil = res.data.productionId.map(prodData => prodData.oil).reduce(function (accumulator, prod) { return accumulator + prod })
                const totalWater = res.data.productionId.map(prodData => prodData.water).reduce(function (accumulator, prod) { return accumulator + prod })
                this.setState({
                    well: res.data,
                    tempLat: res.data.latLong.latitude,
                    tempLng: res.data.latLong.longitude,
                    totalOil: totalOil,
                    totalGas: totalGas,
                    totalWater: totalWater
                })
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
                            <FlexContainer>
                                <SectionTitle>Well Summary</SectionTitle>
                                <Link to={"/welltable/" + this.props.match.params.id + "/prod/new"}>
                                    <Button mb="15px">+ Production</Button>
                                </Link>
                                <Link to={"/welltable/" + this.props.match.params.id + "/recomp/new"} style={{ marginLeft: "1em" }}>
                                    <Button mb="15px">+ Recompletion</Button>
                                </Link>
                            </FlexContainer>
                            <Card>
                                <SectionTitle>Prod Summary</SectionTitle>
                                <div style={{ height: "40vw" }}>
                                    <GraphLine well={this.state.well.productionId || []}
                                        key={this.state.well.id} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Location</SectionTitle>
                                <Map height="35vw" wellLocation={{ latitude: this.state.tempLat, longitude: this.state.tempLng }} />
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Prod Total</SectionTitle>
                                <GraphBar
                                    class="half-pie"
                                    oil={this.state.totalOil}
                                    gas={this.state.totalGas}
                                    water={this.state.totalWater}
                                    key={this.state.well.id} />
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