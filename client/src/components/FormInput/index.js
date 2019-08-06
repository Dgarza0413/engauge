import React from 'react';
import { Form } from "react-bootstrap";
import { StringInput, NumberInput, Select, BoxInput } from "../Form";
import "./style.css";

export function WellForm() {
    return (
        <div>
            <form>
                <StringInput label="Well Name" placeholder="02" />
                <StringInput label="Well No." placeholder="02" />
                <Select label="Well Type">
                    <option>Drilled</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <StringInput label="API No." placeholder="147-91-8-5-1H" />
                <StringInput label="Operator Name" placeholder="Sue-Ann Operating, L.C." />
                <StringInput label="Lease Name" placeholder="Martha McMillan" />
                <StringInput label="County" placeholder="Travis" />
                <NumberInput label="RRC District No." placeholder="02" />
                <NumberInput label="Field No." placeholder="02" />
                <StringInput label="Field Name" placeholder="Poesta Greek (Hartzendorf)" />
                <NumberInput label="Latitude" placeholder="90.000000" />
                <NumberInput label="Longitude" placeholder="-90.000000" />
                <NumberInput label="Completion Depth" placeholder="1000" unit="ft." />
                <NumberInput label="True Vertical Depth" placeholder="1000" unit="ft." />
                <BoxInput label="Wellbore Profile">
                    <Form.Check custom inline name="wellbore-profile" label="Vertical" type="checkbox" id="custom-inline-checkbox-1" />
                    <Form.Check custom inline name="wellbore-profile" label="Horizontal" type="checkbox" id="custom-inline-checkbox-2" />
                    <Form.Check custom inline name="wellbore-profile" label="Directional" type="checkbox" id="custom-inline-checkbox-3" />
                    <Form.Check custom inline name="wellbore-profile" label="Sidetrack" type="checkbox" id="custom-inline-checkbox-4" />
                </BoxInput>
                <BoxInput label="Surface Location">
                    <Form.Check custom inline name="surface-location" label="Land" type="radio" id="custom-inline-radio-1" />
                    <Form.Check custom inline name="surface-location" label="Bay/Estuary" type="radio" id="custom-inline-radio-2" />
                    <Form.Check custom inline name="surface-location" label="Inland Waterway" type="radio" id="custom-inline-radio-3" />
                    <Form.Check custom inline name="surface-location" label="Offshore" type="radio" id="custom-inline-radio-4" />
                </BoxInput>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export function W2Form() {
    return (
        <div>
            <form>
                <StringInput label="Spud Date" placeholder="01-01-2019" />
                <StringInput label="Field & Reservior" placeholder="Enter Field & Reservoir" />
                <StringInput label="Date of Test" placeholder="01-01-2019" />
                <NumberInput label="Hours Tested" placeholder="02" />
                <Select label="Production Method">
                    <option>Gas Lift</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <NumberInput label="Pump Size" placeholder="90.000" />
                <NumberInput label="Choke Size" placeholder="90.000" />
                <Form.Label>Total Depth</Form.Label>
                <NumberInput label="TVD" placeholder="1000" unit="ft." />
                <NumberInput label="MD" placeholder="1000" unit="ft." />
                <Form.Label>Plug Back Depth</Form.Label>
                <NumberInput label="TVD" placeholder="1000" unit="ft." />
                <NumberInput label="MD" placeholder="1000" unit="ft." />
                <Form.Label>Casing Record</Form.Label>
                <Select label="Casing Type">
                    <option>Conventional Production</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <NumberInput label="Casing Size" placeholder="02" unit="in." />
                <NumberInput label="Hole Size" placeholder="07" unit="in." />
                <Select label="Cement Type">
                    <option>Class A</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <NumberInput label="Cement Amount" placeholder="02" unit="sacks" />
                <NumberInput label="Slurry Volume" placeholder="02" unit="cu. ft." />
                <StringInput label="Top of Cement" placeholder="Surface" />
                <Form.Label>Tubing Records</Form.Label>
                <NumberInput label="Size" placeholder="02" unit="in." />
                <NumberInput label="Depth Set" placeholder="07" unit="in." />
                <Select label="Packer Type">
                    <option>Hydralic Set</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <NumberInput label="Packer Depth" placeholder="07" unit="ft." />
                <Form.Label>Production / Injection / Disposal Interval</Form.Label>
                <StringInput label="From" placeholder="Enter Where From" />
                <StringInput label="To" placeholder="Enter Where To" />
                <Form.Label>Formation Records</Form.Label>
                <Select label="Pricipal Geological Markers and Formation Tops">
                    <option>Hydralic Set</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <NumberInput label="TVD" placeholder="02" unit="ft." />
                <NumberInput label="MD" placeholder="07" unit="ft." />
                <Select label="Formation Type">
                    <option>Zone With Corrosive Formation Fluids</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <Select label="Isolated">
                    <option>Yes</option>
                    <option>No</option>
                </Select>
                <input type="submit"></input>
            </form>
        </div>
    );
}

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
