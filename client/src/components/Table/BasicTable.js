import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import API from '../../utils/API';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DenseTable = () => {
    const classes = useStyles();

    const [wells, setWells] = useState([]);

    console.log("from basic table")
    console.log(wells)

    useEffect(() => {
        getWellData()
    }, []);

    const getWellData = async () => {
        try {
            const res = await API.getAllWellData()
            setWells(res.data)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Well Name</TableCell>
                        <TableCell align="right">Well Number</TableCell>
                        <TableCell align="right">API Number</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {wells.map(e => {
                        return (
                            <TableRow>
                                <TableCell>{e.wellName}</TableCell>
                                <TableCell align="right">{e.wellNum}</TableCell>
                                <TableCell align="right">{e.apiNum}</TableCell>
                                <TableCell align="right">{e.isOn}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DenseTable;