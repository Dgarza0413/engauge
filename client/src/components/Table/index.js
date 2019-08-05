import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { borderRight } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        float: borderRight,
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

function createData(Name, API, Flow, Disposal, Status) {
    return { Name, API, Flow, Disposal, Status };
}

const rows = [
    createData('Name', 159, 6.0, 24, 4.0),
    createData('API', 237, 9.0, 37, 4.3),
    createData('Flow', 262, 16.0, 24, 6.0),
    createData('Disposal', 305, 3.7, 67, 4.3),
    createData('Status', 356, 16.0, 49, 3.9),
];

function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">API No.</TableCell>
                        <TableCell align="right">Flow</TableCell>
                        <TableCell align="right">Disposal</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.Name}
                            </TableCell>
                            <TableCell align="right">{row.API}</TableCell>
                            <TableCell align="right">{row.Flow}</TableCell>
                            <TableCell align="right">{row.Disposal}</TableCell>
                            <TableCell align="right">{row.Status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default SimpleTable;