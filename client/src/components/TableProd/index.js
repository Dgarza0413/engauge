import React from "react";
import Table from "react-bootstrap/Table";
import Card from "../Card";
import Moment from "react-moment";

// const calculateData = data => {
//     // console.log("this is the well data: " + JSON.stringify(data));
//     const totalData = data.reduce((acc, currentValue) => {
//         // return acc + currentValue.gas;
//         // console.log("this is current value" + JSON.stringify(acc));
//         let oil = acc + currentValue.oil;
//         let gas = acc + currentValue.gas;
//         let water = acc + currentValue.water;
//         let casingPSI = acc + currentValue.casingPSI;
//         let tubingPSI = acc + currentValue.tubingPSI;
//         return oil;
//         // return [{
//         //     oil: oil, 
//         //     gas: gas,
//         //     water: water,
//         //     casingPSI: casingPSI,
//         //     tubingPSI: tubingPSI
//         // }];
//     }, []);
//     // return totalData;
//     console.log("testing" + JSON.stringify(totalData));
// }

function WellTableProd(props) {
    return (
        <div>
            {/* <Table striped bordered hover> */}
            <Card padding="0">
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Oil</th>
                            <th>Gas</th>
                            <th>Water</th>
                            <th>Casing PSI</th>
                            <th>Tubing PSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.well.map(w => (
                            <tr key={w.id}>
                                <td><Moment format="MM/DD/YYYY">{w.date}</Moment></td>
                                <td>{w.oil}</td>
                                <td>{w.gas}</td>
                                <td>{w.water}</td>
                                <td>{w.casingPSI}</td>
                                <td>{w.tubingPSI}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </div >
    );
}

export default WellTableProd;
