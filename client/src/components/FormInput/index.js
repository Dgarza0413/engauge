import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import "./style.css";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        age: '',
        date: '',
        multiline: '',
        currency: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Paper>
                <TextField className="button"
                    id="well-api-num"
                    label="API Number"
                    // style={{ margin: 10 }}
                    placeholder="xx-xxx-xxxxx"
                    className={classes.textField}
                    // helperText="Full width!"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="operator-name"
                    label="Operator Name"
                    // style={{ margin: 10 }}
                    className={classes.textField}
                    placeholder="Oil and Gas Co."
                    // helperText="Full width!"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="lease-name"
                    label="Lease Name"
                    placeholder="Lease Name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="county-name"
                    label="County Name"
                    placeholder="Travis"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="rrc-district-no"
                    label="RRC District"
                    placeholder="02"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="field-no"
                    label="Field Number"
                    placeholder="02"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="field-name"
                    label="Field Name"
                    placeholder="Yougeen"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="field-name"
                    label="Field Name"
                    placeholder="Yougeen"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="latitude"
                    label="Latitude"
                    helperText="Use WGS-84"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="longtitude"
                    label="Longtitude"
                    helperText="Use WGS-84"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="well-name"
                    label="Well Name"
                    placeholder="Travis"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="well-number"
                    label="Well Number"
                    placeholder="1D"
                    helperText="This can be mixed"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="Well Type"
                    select
                    label="Select"
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange('currency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                ></TextField>

            </Paper>
            <Paper>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-dense"
                    label="Dense"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    id="outlined-dense-multiline"
                    label="Dense multiline"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                />
            </Paper>

            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={values.multiline}
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                helperText="hello"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                className={classes.textField}
                helperText="Some important text"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-number"
                label="Number"
                value={values.age}
                onChange={handleChange('age')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                className={classes.textField}
                value={values.currency}
                onChange={handleChange('currency')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select your currency"
                margin="normal"
                variant="outlined"
            >
            </TextField>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Native select"
                className={classes.textField}
                value={values.currency}
                onChange={handleChange('currency')}
                SelectProps={{
                    native: true,
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select your currency"
                margin="normal"
                variant="outlined"
            >
            </TextField>
        </form>
    );
}
