import React, { Component } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { StringInput, NumberInput, Select, BoxInput } from "../Form";
import Card from "../Card";
import API from "../../utils/API";
import "./style.css";



class WellForm extends Component {

    state = {
        wellName: "",
        wellNum: "",
        wellType: "",
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
        wellBoreProfile: { 
            vertical: "", 
            horizontal: "", 
            directional: "", 
            sidetrack: ""
        },
        surfaceLocation: "",
    };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        if(name === "latitude" || name === "longitude"){
            const latLong = {...this.state.latLong}
            latLong[name] = value;
            this.setState({ latLong })
        } else if (name === "distNumber" || name === "fieldNumber" || name === "fieldName"){
            const fieldList = {...this.state.fieldList}
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
          const obj = {
              wellName: this.state.wellName,
              wellNum: this.state.wellNum,
              wellType: this.state.wellType,
              apiNum: this.state.apiNum,
              latLong: { 
                  latitude: this.state.latLong.latitude, 
                  longitude: this.state.latLong.longitude
              }
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
                <form onSubmit={this.handleFormSubmit}>
                    <Card>
                        <Container>
                            <Row>
                                <Col lg="4">
                                    <StringInput label="Well Name" name="wellName" value={this.state.wellName} onChange={this.handleInputChange} placeholder="02" />
                                </Col>
                                <Col lg="4">
                                    <StringInput label="Well No." name="wellNum" value={this.state.wellNum} onChange={this.handleInputChange} placeholder="02" />
                                </Col>
                                <Col lg="4">
                                    <Select label="Well Type" name="wellType" value={this.state.wellType} onChange={this.handleInputChange} >
                                        <option value="Drilled">Drilled</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <StringInput label="API No." name="apiNum" value={this.state.apiNum} onChange={this.handleInputChange} placeholder="147-91-8-5-1H" />
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
                                    <NumberInput label="Latitude" name="latitude" value={this.state.latLong.latitude} onChange={this.handleInputChange} placeholder="90.000000" />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Longitude" name="longitude" value={this.state.latLong.longitude} onChange={this.handleInputChange} placeholder="-90.000000" />
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
                                        <Form.Check custom inline name="wellbore-profile" label="Vertical" type="checkbox" id="custom-inline-checkbox-1" />
                                        <Form.Check custom inline name="wellbore-profile" label="Horizontal" type="checkbox" id="custom-inline-checkbox-2" />
                                        <Form.Check custom inline name="wellbore-profile" label="Directional" type="checkbox" id="custom-inline-checkbox-3" />
                                        <Form.Check custom inline name="wellbore-profile" label="Sidetrack" type="checkbox" id="custom-inline-checkbox-4" />
                                    </BoxInput>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BoxInput label="Surface Location">
                                        <Form.Check custom inline name="surface-location" label="Land" type="radio" id="custom-inline-radio-1" />
                                        <Form.Check custom inline name="surface-location" label="Bay/Estuary" type="radio" id="custom-inline-radio-2" />
                                        <Form.Check custom inline name="surface-location" label="Inland Waterway" type="radio" id="custom-inline-radio-3" />
                                        <Form.Check custom inline name="surface-location" label="Offshore" type="radio" id="custom-inline-radio-4" />
                                    </BoxInput>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

class W2Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <Card>
                        <Container>
                            <Row>
                                <Col md="4">
                                    <StringInput label="Spud Date" placeholder="01-01-2019" />
                                </Col>
                                <Col md="8">
                                    <StringInput label="Field & Reservior" placeholder="Enter Field & Reservoir" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <StringInput label="Date of Test" placeholder="01-01-2019" />
                                </Col>
                                <Col lg="2">
                                    <NumberInput label="Hours Tested" placeholder="02" />
                                </Col>
                                <Col lg="3">
                                    <Select label="Production Method">
                                        <option>Gas Lift</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col lg="2">
                                    <NumberInput label="Pump Size" placeholder="90.000" />
                                </Col>
                                <Col lg="2">
                                    <NumberInput label="Choke Size" placeholder="90.000" />
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
                                            <NumberInput label="TVD" placeholder="1000" unit="ft." />
                                        </Col>
                                        <Col lg="6">
                                            <NumberInput label="MD" placeholder="1000" unit="ft." />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="6">
                                    <Form.Label>Plug Back Depth</Form.Label>
                                    <Row>
                                        <Col lg="6">
                                            <NumberInput label="TVD" placeholder="1000" unit="ft." />
                                        </Col>
                                        <Col lg="6">
                                            <NumberInput label="MD" placeholder="1000" unit="ft." />
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
                                    <Select label="Casing Type">
                                        <option>Conventional Production</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Casing Size" placeholder="02" unit="in." />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Hole Size" placeholder="07" unit="in." />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3">
                                    <Select label="Cement Type">
                                        <option>Class A</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Cement Amount" placeholder="02" unit="sacks" />
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Slurry Volume" placeholder="02" unit="cu. ft." width="65%" />
                                </Col>
                                <Col lg="3">
                                    <StringInput label="Top of Cement" placeholder="Surface" />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Form.Label>Tubing Records</Form.Label>
                            <Row>
                                <Col lg="2">
                                    <NumberInput label="Size" placeholder="02" unit="in." />
                                </Col>
                                <Col lg="2">
                                    <NumberInput label="Depth Set" placeholder="07" unit="in." />
                                </Col>
                                <Col lg="4">
                                    <Select label="Packer Type">
                                        <option>Hydralic Set</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col lg="3">
                                    <NumberInput label="Packer Depth" placeholder="07" unit="ft." />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Form.Label>Production / Injection / Disposal Interval</Form.Label>
                            <Row>
                                <Col md="6">
                                    <StringInput label="From" placeholder="Enter Where From" />
                                </Col>
                                <Col md="6">
                                    <StringInput label="To" placeholder="Enter Where To" />
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <Card>
                        <Container>
                            <Form.Label>Formation Records</Form.Label>
                            <Row>
                                <Col lg="8">
                                    <Select label="Principal Geological Markers and Formation Tops">
                                        <option>Hydralic Set</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col lg="2">
                                    <NumberInput label="TVD" placeholder="02" unit="ft." />
                                </Col>
                                <Col lg="2">
                                    <NumberInput label="MD" placeholder="07" unit="ft." />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="8">
                                    <Select label="Formation Type">
                                        <option>Zone With Corrosive Formation Fluids</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                </Col>
                                <Col md="4">
                                    <Select label="Isolated">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
export { WellForm, W2Form };

// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//     },
//     dense: {
//         marginTop: theme.spacing(2),
//     },
//     menu: {
//         width: 200,
//     },
// }));

// export default function OutlinedTextFields() {
//     const classes = useStyles();
//     const [values, setValues] = React.useState({
//         name: '',
//         age: '',
//         date: '',
//         multiline: '',
//         currency: '',
//     });

//     const handleChange = name => event => {
//         setValues({ ...values, [name]: event.target.value });
//     };

//     return (
//         <form className={classes.container} noValidate autoComplete="off">
//             <Paper>
//                 <TextField
//                     id="spud-date"
//                     label="Spud Date"
//                     // style={{ margin: 10 }}
//                     placeholder="dd/mm/yyyy"
//                     // helperText="Full width!"
//                     margin="normal"
//                     variant="outlined"
//                     InputLabelProps={{
//                         shrink: true,
//                     }}
//                 />
//                 <TextField
//                     id="field-reservoir"
//                     label="Field/Reservoir"
//                     placeholder="Enter Field/Reservoir"
//                     className={classes.textField}
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     required
//                     id="data-of-test"
//                     label="Test Date"
//                     defaultValue="01/02/2019"
//                     className={classes.textField}
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="hours-tested"
//                     label="hours test"
//                     defaultValue=""
//                     className={classes.textField}
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="production-method"
//                     label="production method"
//                     defaultValue=""
//                     className={classes.textField}
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="pump-size"
//                     label="pump size"
//                     defaultValue=""
//                     className={classes.textField}
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="choke-size"
//                     label="choke size"
//                     defaultValue=""
//                     className={classes.textField}
//                     margin="normal"
//                     variant="outlined"
//                 />
//             </Paper>
//             <Paper>
//                 <TextField
//                     disabled
//                     id="outlined-disabled"
//                     label="Disabled"
//                     defaultValue="Hello World"
//                     className={classes.textField}
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="outlined-email-input"
//                     label="Email"
//                     className={classes.textField}
//                     type="email"
//                     name="email"
//                     autoComplete="email"
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="outlined-password-input"
//                     label="Password"
//                     className={classes.textField}
//                     type="password"
//                     autoComplete="current-password"
//                     margin="normal"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="outlined-read-only-input"
//                     label="Read Only"
//                     defaultValue="Hello World"
//                     className={classes.textField}
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="outlined-dense"
//                     label="Dense"
//                     className={clsx(classes.textField, classes.dense)}
//                     margin="dense"
//                     variant="outlined"
//                 />
//                 <TextField
//                     id="outlined-dense-multiline"
//                     label="Dense multiline"
//                     className={clsx(classes.textField, classes.dense)}
//                     margin="dense"
//                     variant="outlined"
//                     multiline
//                     rowsMax="4"
//                 />
//             </Paper>

//             <TextField
//                 id="outlined-multiline-flexible"
//                 label="Multiline"
//                 multiline
//                 rowsMax="4"
//                 value={values.multiline}
//                 onChange={handleChange('multiline')}
//                 className={classes.textField}
//                 margin="normal"
//                 helperText="hello"
//                 variant="outlined"
//             />
//             <TextField
//                 id="outlined-multiline-static"
//                 label="Multiline"
//                 multiline
//                 rows="4"
//                 defaultValue="Default Value"
//                 className={classes.textField}
//                 margin="normal"
//                 variant="outlined"
//             />
//             <TextField
//                 id="outlined-helperText"
//                 label="Helper text"
//                 defaultValue="Default Value"
//                 className={classes.textField}
//                 helperText="Some important text"
//                 margin="normal"
//                 variant="outlined"
//             />
//             <TextField
//                 id="outlined-with-placeholder"
//                 label="With placeholder"
//                 placeholder="Placeholder"
//                 className={classes.textField}
//                 margin="normal"
//                 variant="outlined"
//             />
//             <TextField
//                 id="outlined-textarea"
//                 label="Multiline Placeholder"
//                 placeholder="Placeholder"
//                 multiline
//                 className={classes.textField}
//                 margin="normal"
//                 variant="outlined"
//             />
//             <TextField
//                 id="outlined-number"
//                 label="Number"
//                 value={values.age}
//                 onChange={handleChange('age')}
//                 type="number"
//                 className={classes.textField}
//                 InputLabelProps={{
//                     shrink: true,
//                 }}
//                 margin="normal"
//                 variant="outlined"
//             />
//             <TextField
//                 id="outlined-search"
//                 label="Search field"
//                 type="search"
//                 className={classes.textField}
//                 margin="normal"
//                 variant="outlined"
//             />
//             <TextField
//                 id="outlined-select-currency"
//                 select
//                 label="Select"
//                 className={classes.textField}
//                 value={values.currency}
//                 onChange={handleChange('currency')}
//                 SelectProps={{
//                     MenuProps: {
//                         className: classes.menu,
//                     },
//                 }}
//                 helperText="Please select your currency"
//                 margin="normal"
//                 variant="outlined"
//             >
//             </TextField>
//             <TextField
//                 id="outlined-select-currency-native"
//                 select
//                 label="Native select"
//                 className={classes.textField}
//                 value={values.currency}
//                 onChange={handleChange('currency')}
//                 SelectProps={{
//                     native: true,
//                     MenuProps: {
//                         className: classes.menu,
//                     },
//                 }}
//                 helperText="Please select your currency"
//                 margin="normal"
//                 variant="outlined"
//             >
//             </TextField>
//         </form>
//     );
// }
