import React, { Component } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { StringInput, NumberInput, Select, BoxInput, TextBoxInput } from "../Form";
import Card from "../Card";
import Button from "../Button";
import API from "../../utils/API";
import "./style.css";

//wgs84

class WellForm extends Component {
    state = {
        wellName: "",
        wellNum: "",
        wellType: "Oil",
        apiNum: "",
        operatorName: "",
        leaseName: "",
        county: "",
        fieldList: {
            distNumber: "",
            fieldNumber: "",
            fieldName: ""
        },
        latLong: {
            latitude: "",
            longitude: ""
        },
        completionDepth: "",
        trueVerticalDepth: "",
        wellBoreProfile: "",
        surfaceLocation: "",
    };

    handleValidation() {
        let wellName = this.state.wellName;
        let wellNum = this.state.wellNum;
        let apiNum = this.state.apiName;

        if (!wellName.length > 0) {
            return false
        }
        if (!wellNum.length > 0) {
            return false
        }
        if (!apiNum === 10) {
            return false
        }
        return true

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        if (name === "latitude" || name === "longitude") {
            const latLong = { ...this.state.latLong }
            latLong[name] = value;
            this.setState({ latLong })
        } else if (name === "distNumber" || name === "fieldNumber" || name === "fieldName") {
            const fieldList = { ...this.state.fieldList }
            fieldList[name] = value;
            this.setState({ fieldList })
        } else {
            this.setState({
                [name]: value
            });
        }
    };   
    
    


    handleFormSubmit = event => {
        event.preventDefault();
        const passed = this.handleValidation()
        if (passed) {
            const obj = {
                wellName: this.state.wellName,
                wellNum: this.state.wellNum,
                wellType: this.state.wellType,
                apiNum: this.state.apiNum,
                operatorName: this.state.operatorName,
              leaseName: this.state.leaseName,
              county: this.state.county,
              fieldList: {
                  distNumber: this.state.fieldList.distNumber,
                  fieldNumber: this.state.fieldList.fieldNumber,
                  fieldName: this.state.fieldList.fieldName
              },
              latLong: { 
                  latitude: this.state.latLong.latitude, 
                  longitude: this.state.latLong.longitude
              },
              completionDepth: this.state.completionDepth,
              trueVerticalDepth: this.state.trueVerticalDepth,
              wellBoreProfile: this.state.wellBoreProfile,
              surfaceLocation: this.state.surfaceLocation,
  
              // W-2
              spudDate: this.state.spudDate,
          fieldAndReservoir: this.state.fieldAndReservoir,
          testData: {
              testDate: this.state.testData.testDate,
              hoursTested: this.state.testData.hoursTested,
              prodMethod: this.state.testData.prodMethod,
              chokeSize: this.state.testData.chokeSize
          },
          totalDepth: {
              tvd: this.state.totalDepth.tvd,
              md: this.state.totalDepth.md
          },
          plugBackDepth: {
              tvd: this.state.plugBackDepth.tvd,
              md: this.state.plugBackDepth.md
          },
          casingRecord: [{
              casingType: this.state.casingRecord.casingType,
              casingSize: this.state.casingRecord.casingSize,
              holeSize: this.state.casingRecord.holeSize,
              cementClass: this.state.casingRecord.cementClass,
              cementAmt: this.state.casingRecord.cementAmt,
              slurryVol: this.state.casingRecord.slurryVol,
              topOfCement: this.state.casingRecord.topOfCement
          }],
          tubingRecord: [{
              size: this.state.tubingRecord.size,
              depthSet: this.state.tubingRecord.depthSet,
              packerDepthType: this.state.tubingRecord.packerDepthType
          }],
          prodInjDispInt: [{
              from: this.state.prodInjDispInt.from,
              to: this.state.prodInjDispInt.to
          }],
          formationRecord: [{
              markers: this.state.formationRecord.markers,
              tvdDepth: this.state.formationRecord.tvdDepth,
              mdDepth: this.state.formationRecord.mdDepth,
              isPermitted: this.state.formationRecord.isPermitted,
              isIsolated: this.state.formationRecord.isIsolated
          }],
          tanks: [{
              size: this.state.tanks.size,
              bblsPerInch: this.state.tanks.bblsPerInch,
              oilDepth: this.state.tanks.oilDepth,
              waterDepth: this.state.tanks.waterDepth,
              runTicket: this.state.tanks.runTicket
          }]
      }
            console.log(obj)
            API.addWell(obj)
                .then(res => {

                    console.log(res.data.items);

                    this.setState({
                        obj: res.data.items
                    });
                })
                .catch(err => console.log(err));
            console.log("we passed validation")
        } else {
            console.log("we failed validation");
        }
        //   const obj = {
        //       wellName: this.state.wellName,
        //       wellNum: this.state.wellNum,
        //       wellType: this.state.wellType,
        //       apiNum: this.state.apiNum,
        //       operatorName: this.state.operatorName,
        //     leaseName: this.state.leaseName,
        //     county: this.state.county,
        //     fieldList: {
        //         distNumber: this.state.fieldList.distNumber,
        //         fieldNumber: this.state.fieldList.fieldNumber,
        //         fieldName: this.state.fieldList.fieldName
        //     },
        //     latLong: { 
        //         latitude: this.state.latLong.latitude, 
        //         longitude: this.state.latLong.longitude
        //     },
        //     completionDepth: this.state.completionDepth,
        //     trueVerticalDepth: this.state.trueVerticalDepth,
        //     wellBoreProfile: this.state.wellBoreProfile,
        //     surfaceLocation: this.state.surfaceLocation
        //   }
        //   console.log(obj)
        //   API.addWell(obj)
        //     .then(res => {

        //       console.log(res.data.items);

        //       this.setState({
        //         obj: res.data.items
        //       });
        //     })
        //     .catch(err => console.log(err));
    };

    handleRadioClick = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <Card>
                        <Container>
                            <Row>
                                <Col lg="4">
                                    <StringInput label="Well Name" name="wellName" value={this.state.wellName} onChange={this.handleInputChange} placeholder="wellname" />
                                </Col>
                                <Col lg="4">
                                    <StringInput label="Well No." name="wellNum" value={this.state.wellNum} onChange={this.handleInputChange} placeholder="02" />
                                </Col>
                                <Col lg="4">
                                    <Select label="Well Type" name="wellType" value={this.state.wellType} onChange={this.handleInputChange} >
                                        <option>Oil</option>
                                        <option>Gas</option>
                                        <option>Saltwater Disposal</option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <StringInput label="API No." name="apiNum" value={this.state.apiNum} onChange={this.handleInputChange} placeholder="42-xxx-xxxxx" />
                                </Col>
                                <Col lg="4">
                                    <StringInput label="Operator Name" name="operatorName" value={this.state.operatorName} onChange={this.handleInputChange} placeholder="Sue-Ann Operating, L.C." />
                                </Col>
                                <Col lg="3">
                                    <StringInput label="Lease Name" name="leaseName" value={this.state.leaseName} onChange={this.handleInputChange} placeholder="Martha McMillan" />
                                </Col>
                                <Col lg="2">
                                    <StringInput label="County" name="county" value={this.state.county} onChange={this.handleInputChange} placeholder="Travis" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <NumberInput label="RRC District No." name="distNumber" value={this.state.fieldList.distNumber} onChange={this.handleInputChange} placeholder="02" />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Field No." name="fieldNumber" value={this.state.fieldList.fieldNumber} onChange={this.handleInputChange} placeholder="02" />
                                </Col>
                                <Col lg="6">
                                    <StringInput label="Field Name" name="fieldName" value={this.state.fieldList.fieldName} onChange={this.handleInputChange} placeholder="Poesta Greek (Hartzendorf)" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <NumberInput label="Latitude (WGS84)" name="latitude" value={this.state.latLong.latitude} onChange={this.handleInputChange} placeholder="90.000000" />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Longitude (WGS84)" name="longitude" value={this.state.latLong.longitude} onChange={this.handleInputChange} placeholder="-90.000000" />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Completion Depth" name="completionDepth" value={this.state.completionDepth} onChange={this.handleInputChange} placeholder="1000" unit="ft." />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="True Vertical Depth" name="trueVerticalDepth" value={this.state.trueVerticalDepth} onChange={this.handleInputChange} placeholder="1000" unit="ft." />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoxInput label="Wellbore Profile">
                                        <Form.Check custom inline name="wellBoreProfile" onClick={this.handleRadioClick} value="Vertical" label="Vertical" type="radio" id="custom-inline-checkbox-1" />
                                        <Form.Check custom inline name="wellBoreProfile" onClick={this.handleRadioClick} value="Horizontal" label="Horizontal" type="radio" id="custom-inline-checkbox-2" />
                                        <Form.Check custom inline name="wellBoreProfile" onClick={this.handleRadioClick} value="Directional" label="Directional" type="radio" id="custom-inline-checkbox-3" />
                                        <Form.Check custom inline name="wellBoreProfile" onClick={this.handleRadioClick} value="Sidetrack" label="Sidetrack" type="radio" id="custom-inline-checkbox-4" />
                                    </BoxInput>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoxInput label="Surface Location">
                                        <Form.Check custom inline name="surfaceLocation" onClick={this.handleRadioClick} value="Land" label="Land" type="radio" id="custom-inline-radio-1" />
                                        <Form.Check custom inline name="surfaceLocation" onClick={this.handleRadioClick} value="Bay/Estuary" label="Bay/Estuary" type="radio" id="custom-inline-radio-2" />
                                        <Form.Check custom inline name="surfaceLocation" onClick={this.handleRadioClick} value="Inland Waterway" label="Inland Waterway" type="radio" id="custom-inline-radio-3" />
                                        <Form.Check custom inline name="surfaceLocation" onClick={this.handleRadioClick} value="Offshore" label="Offshore" type="radio" id="custom-inline-radio-4" />
                                    </BoxInput>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Button>
                        <input type="submit"></input>
                    </Button>
                </form>
            </div>
        );
    }
}

class W2Form extends Component {
    // W-2
    state = {
        spudDate: "",
        fieldAndReservoir: "",
        testData: {
            testDate: "",
            hoursTested: "",
            prodMethod: "",
            chokeSize: ""
        },
        totalDepth: {
            tvdTD: "",
            mdTD: ""
        },
        plugBackDepth: {
            tvdPBD: "",
            mdPBD: ""
        },
        casingRecord: [{
            casingType: "",
            casingSize: "",
            holeSize: "",
            cementClass: "",
            cementAmt: "",
            slurryVol: "",
            topOfCement: ""
        }],
        tubingRecord: [{
            size: "",
            depthSet: "",
            packerType: "",
            packerDepth: ""
        }],
        prodInjDispInt: [{
            from: "",
            to: ""
        }],
        formationRecord: [{
            markers: "",
            tvdDepth: "",
            mdDepth: "",
            formationType: "",
            isIsolated: ""
        }],
        tanks: [{
            size: "",
            bblsPerInch: "",
            oilDepth: "",
            waterDepth: "",
            runTicket: ""
        }]
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        if(name === "testDate" || name === "hoursTested" || name === "prodMethod" || name === "chokeSize"){
            const testData = {...this.state.testData}
            testData[name] = value;
            this.setState({ testData })
        } else if (name === "distNumber" || name === "fieldNumber" || name === "fieldName") {
            const fieldList = {...this.state.fieldList}
            fieldList[name] = value;
            this.setState({ fieldList })
        } else if (name === "tvdTD" || name === "mdTD") {
            const totalDepth = {...this.state.totalDepth}
            totalDepth[name] = value;
            this.setState({ totalDepth })
        } else if (name === "tvdPBD" || name === "mdPBD") {
            const plugBackDepth = {...this.state.plugBackDepth}
            plugBackDepth[name] = value;
            this.setState({ plugBackDepth })
        } else if (name === "casingType" || name === "casingSize" || name === "holeSize" || name === "cementClass" || name === "cementAmt" || name === "slurryVol" || name === "topOfCement") {
            const casingRecord = {...this.state.casingRecord}
            casingRecord[name] = value;
            this.setState({ casingRecord })
        } else if (name === "size" || name === "depthSet" || name === "packerType" || name === "packerDepth") {
            const tubingRecord = {...this.state.tubingRecord}
            tubingRecord[name] = value;
            this.setState({ tubingRecord })
        } else if (name === "from" || name === "to") {
            const prodInjDispInt = {...this.state.prodInjDispInt}
            prodInjDispInt[name] = value;
            this.setState({ prodInjDispInt })
        } else if (name === "markers" || name === "depttvdDepthhSet" || name === "mdDepth" || name === "formationType" || name === "isIsolated") {
            const formationRecord = {...this.state.formationRecord}
            formationRecord[name] = value;
            this.setState({ formationRecord })
        } else {
            this.setState({
                [name]: value
            });
        }
    };

    
      handleFormSubmit = event => {
        event.preventDefault();
          const obj = {
            spudDate: this.state.spudDate,
            fieldAndReservoir: this.state.fieldAndReservoir,
            testData: {
                testDate: this.state.testData.testDate,
                hoursTested: this.state.testData.hoursTested,
                prodMethod: this.state.testData.prodMethod,
                chokeSize: this.state.testData.chokeSize
            },
            totalDepth: {
                tvdTD: this.state.totalDepth.tvdTD,
                mdTD: this.state.totalDepth.mdTD
            },
            plugBackDepth: {
                tvdPBD: this.state.plugBackDepth.tvdPBD,
                mdPBD: this.state.plugBackDepth.mdPBD
            },
            casingRecord: [{
                casingType: this.state.casingRecord.casingType,
                casingSize: this.state.casingRecord.casingSize,
                holeSize: this.state.casingRecord.holeSize,
                cementClass: this.state.casingRecord.cementClass,
                cementAmt: this.state.casingRecord.cementAmt,
                slurryVol: this.state.casingRecord.slurryVol,
                topOfCement: this.state.casingRecord.topOfCement
            }],
            tubingRecord: [{
                size: this.state.tubingRecord.size,
                depthSet: this.state.tubingRecord.depthSet,
                packerType: this.state.tubingRecord.packerType,
                packerDepth: this.state.tubingRecord.packerDepth
            }],
            prodInjDispInt: [{
                from: this.state.prodInjDispInt.from,
                to: this.state.prodInjDispInt.to
            }],
            formationRecord: [{
                markers: this.state.formationRecord.markers,
                tvdDepth: this.state.formationRecord.tvdDepth,
                mdDepth: this.state.formationRecord.mdDepth,
                formationType: this.state.formationRecord.formationType,
                isIsolated: this.state.formationRecord.isIsolated
            }],
            tanks: [{
                size: this.state.tanks.size,
                bblsPerInch: this.state.tanks.bblsPerInch,
                oilDepth: this.state.tanks.oilDepth,
                waterDepth: this.state.tanks.waterDepth,
                runTicket: this.state.tanks.runTicket
            }]
          }
          console.log(obj)
          API.addWell(obj)
            .then(res => {
    
              console.log(res.data.items);
    
              this.setState({
                obj: res.data.items
              });
            })
            .catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                <form>
                    <Card>
                        <Container>
                            <Row>
                                <Col md="4">
                                    <StringInput label="Spud Date" name="spudDate" value={this.state.spudDate} onChange={this.handleInputChange} placeholder="01-01-2019" />
                                </Col>
                                <Col md="8">
                                    <StringInput label="Field & Reservior" name="fieldAndReservoir" value={this.state.fieldAndReservoir} onChange={this.handleInputChange} placeholder="Enter Field & Reservoir" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <StringInput label="Date of Test" name="testDate" value={this.state.testData.testDate} onChange={this.handleInputChange} placeholder="01-01-2019" />
                                </Col>
                                <Col lg="2">
                                    <NumberInput label="Hours Tested" name="hoursTested" value={this.state.testData.hoursTested} onChange={this.handleInputChange} placeholder="02" />
                                </Col>
                                <Col lg="4">
                                    <Select label="Production Method" name="prodMethod" value={this.state.testData.prodMethod} onChange={this.handleInputChange} >
                                        <option>Flowing</option>
                                        <option>Gas Lift</option>
                                        <option>Pumpjack</option>
                                        <option>Plunger</option>
                                        <option>ESP</option>
                                    </Select>
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Choke Size" name="chokeSize" value={this.state.testData.chokeSize} onChange={this.handleInputChange} placeholder="9.0" />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Row>
                                <Col lg="6">
                                    <Form.Label>Total Depth</Form.Label>
                                    <Row>
                                        <Col lg="6">
                                            <NumberInput label="TVD" name="tvdTD" value={this.state.totalDepth.tvdTD} onChange={this.handleInputChange} placeholder="1000" unit="ft." />
                                        </Col>
                                        <Col lg="6">
                                            <NumberInput label="MD" name="mdTD" value={this.state.totalDepth.mdTD} onChange={this.handleInputChange} placeholder="1000" unit="ft." />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="6">
                                    <Form.Label>Plug Back Depth</Form.Label>
                                    <Row>
                                        <Col lg="6">
                                            <NumberInput label="TVD" name="tvdPBD" value={this.state.plugBackDepth.tvdPBD} onChange={this.handleInputChange} placeholder="1000" unit="ft." />
                                        </Col>
                                        <Col lg="6">
                                            <NumberInput label="MD" name="mdPBD" value={this.state.plugBackDepth.mdPBD} onChange={this.handleInputChange} placeholder="1000" unit="ft." />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Form.Label>Casing Record</Form.Label>
                            <Row>
                                <Col lg="6">
                                    <Select label="Casing Type" name="casingType" value={this.state.casingRecord.casingType} onChange={this.handleInputChange}>
                                        <option>Surface</option>
                                        <option>Intermediate</option>
                                        <option>Production</option>
                                    </Select>
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Casing Size" name="casingSize" value={this.state.casingRecord.casingSize} onChange={this.handleInputChange} placeholder="02" unit="in." />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Hole Size" name="holeSize" value={this.state.casingRecord.holeSize} onChange={this.handleInputChange} placeholder="07" unit="in." />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <StringInput label="Cement Class" name="cementClass" value={this.state.casingRecord.cementClass} onChange={this.handleInputChange} placeholder="Class A" />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Cement Amount" name="cementAmt" value={this.state.casingRecord.cementAmt} onChange={this.handleInputChange} placeholder="02" unit="sacks" />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Slurry Volume" name="slurryVol" value={this.state.casingRecord.slurryVol} onChange={this.handleInputChange} placeholder="02" unit="cu. ft." width="65%" />
                                </Col>
                                <Col lg="3">
                                    <StringInput label="Top of Cement" name="topOfCement" value={this.state.casingRecord.topOfCement} onChange={this.handleInputChange} placeholder="Surface" />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Form.Label>Tubing Records</Form.Label>
                            <Row>
                                <Col lg="3">
                                    <NumberInput label="Size" name="size" value={this.state.tubingRecord.size} onChange={this.handleInputChange} placeholder="02" unit="in." />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Depth Set" name="depthSet" value={this.state.tubingRecord.depthSet} onChange={this.handleInputChange} placeholder="07" unit="in." />
                                </Col>
                                <Col lg="3">
                                    <Select label="Packer Type" name="packerType" value={this.state.tubingRecord.packerType} onChange={this.handleInputChange} >
                                        <option>Hydraulic Set</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Packer Depth" name="packerDepth" value={this.state.tubingRecord.packerDepth} onChange={this.handleInputChange} placeholder="07" unit="ft." />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Form.Label>Production / Injection / Disposal Interval</Form.Label>
                            <Row>
                                <Col md="6">
                                    <StringInput label="From" name="from" value={this.state.prodInjDispInt.from} onChange={this.handleInputChange} placeholder="Enter Where From" />
                                </Col>
                                <Col md="6">
                                    <StringInput label="To" name="to" value={this.state.prodInjDispInt.to} onChange={this.handleInputChange} placeholder="Enter Where To" />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Form.Label>Formation Records</Form.Label>
                            <Row>
                                <Col lg="6">
                                    <Select label="Principal Geological Markers & Formation Tops" name="markers" value={this.state.formationRecord.markers} onChange={this.handleInputChange} >
                                        <option>Hydraulic Set</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="TVD" name="tvdDepth" value={this.state.formationRecord.tvdDepth} onChange={this.handleInputChange} placeholder="02" unit="ft." />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="MD" name="mdDepth" value={this.state.formationRecord.mdDepth} onChange={this.handleInputChange} placeholder="07" unit="ft." />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="8">
                                    <Select label="Formation Type" name="formationType" value={this.state.formationRecord.formationType} onChange={this.handleInputChange} >
                                        <option>Zone With Corrosive Formation Fluids</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col md="4">
                                    <Select label="Isolated" name="isIsolated" value={this.state.formationRecord.isIsolated} onChange={this.handleInputChange} >
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Button>
                        <input type="submit"></input>
                    </Button>
                </form>
            </div>
        );
    }
}

class Production extends Component {
    render() {
        return (
            <div>
                <form>
                    <Card>
                        <Container>
                            <Row>
                                <Col md="3">
                                    <NumberInput label="Oil" placeholder="07" unit="BBLs" />
                                </Col>
                                <Col md="3">
                                    <NumberInput label="Gas" placeholder="07" unit="MCF" />
                                </Col>
                                <Col md="3">
                                    <NumberInput label="Water" placeholder="07" unit="BBLs" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3">
                                    <NumberInput label="Casing PSI" placeholder="07" unit="PSI" />
                                </Col>
                                <Col md="3">
                                    <NumberInput label="Tubing PSI" placeholder="07" unit="PSI" />
                                </Col>
                                <Col md="3">
                                    <NumberInput label="Choke Size" placeholder="07" unit="/64" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TextBoxInput label="Comments" placeholder="Enter Comments Here..." />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Button>
                        <input type="submit"></input>
                    </Button>
                </form>
            </div>
        );
    }
}

export { WellForm, W2Form, Production };