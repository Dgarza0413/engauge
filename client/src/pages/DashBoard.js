import React from 'react';
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import FlexContainer from "../components/FlexContainer";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import API from "../utils/API"
import axios from "axios"

const styles = {
    graph: {
        "height": "25vw"
    }
}

class DashBoard extends React.Component {
    state = {
        well: [],
        wellData: [],
        prodData: {},
        prodOil: {},
        prodGas: {},
        isOnTotal: {},
        isOffTotal: {},
        totalOil: {},
        totalGas: {},
        totalWater: {},
        welcomeEmail: ""
    };
    wellDataAdder = (wells) => {
        this.setState({ well: wells })

    }

    loadProfileInfo = () => {
        axios.get('/api/user/me')
          .then(response => {
              console.log(response.data.username);
            this.setState({welcomeEmail: response.data.username})
          })
          .catch(err => console.log(err))
        }  

    componentDidMount() {
        this.loadProfileInfo()
        API.getAllProd()
            .then(res => {
                const obj = res.data;
                const newObj = [];
                for (let i = 0; i < obj.length; i++) {
                    const date = moment(obj[i].date).format("MM/DD/YYYY");
                    if (!newObj[date]) {
                        newObj[date] =
                            {
                                date: date,
                                water: [],
                                oil: [],
                                gas: []
                            }
                        newObj[date].oil.push(obj[i].oil)
                        newObj[date].gas.push(obj[i].gas)
                        newObj[date].water.push(obj[i].water)
                    } else {
                        newObj[date].oil.push(obj[i].oil)
                        newObj[date].gas.push(obj[i].gas)
                        newObj[date].water.push(obj[i].water)
                    }
                }
                for (let key in newObj) {
                    let gas = newObj[key].gas
                    let oil = newObj[key].oil
                    let water = newObj[key].water
                    let totalGas = gas.reduce((acc, cur) => acc + cur)
                    let totalOil = oil.reduce((acc, cur) => acc + cur)
                    let totalWater = water.reduce((acc, cur) => acc + cur)
                    newObj[key].gas = totalGas
                    newObj[key].oil = totalOil
                    newObj[key].water = totalWater
                }
                console.log(Object.values(newObj))

                const totalGas = res.data.map(prodData => prodData.gas).reduce(function (accumulator, prod) { return accumulator + prod })
                const totalOil = res.data.map(prodData => prodData.oil).reduce(function (accumulator, prod) { return accumulator + prod })
                const totalWater = res.data.map(prodData => prodData.water).reduce(function (accumulator, prod) { return accumulator + prod })

                const objValue = Object.values(newObj)
                this.setState({
                    wellData: objValue,
                    totalGas: totalGas,
                    totalOil: totalOil,
                    totalWater: totalWater
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
                    <SectionTitle>
                    {this.state.welcomeEmail.length > 0
                    ? "Welcome, " + this.state.welcomeEmail
                    : ""}  </SectionTitle>
                    </Row>
                    
                    <Row>
                        <Col lg="12">
                            <Card>
                                <SectionTitle>Production</SectionTitle>
                                <div style={styles.graph}>
                                    <GraphLine well={this.state.wellData || []} />
                                    {/* <GraphLine /> */}
                                </div>
                            </Card>
                        </Col>
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
                                    <GraphLine well={this.state.wellData || []} />
                                    {/* <GraphLine /> */}
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Well Status</SectionTitle>
                                <GraphPie wellIsOn={this.state.isOnTotal}
                                    wellIsOff={this.state.isOffTotal} class="half-pie" />
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <SectionTitle>Prod Summary</SectionTitle>
                                <GraphBar class="half-pie"
                                    oil={this.state.totalOil}
                                    gas={this.state.totalGas}
                                    water={this.state.totalWater}
                                    key={this.state.wellData.id} />
                            </Card>
                        </Col>
                    </Row >
                </Container >
            </PageWrapper >
        )
    }
}

export default DashBoard;