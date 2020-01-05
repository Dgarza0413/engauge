import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Button from '../Button/index.js';

const WellInfoList = ({ wellData }) => {
    const { wellName, wellNum, apiNum, operator, leaseName, county } = wellData

    return (
        <div>
            <Card>
                <Link to={{
                    pathname: '/well/' + wellData._id + '/update',
                    aboutProps: {
                        wellName: wellName,
                        wellNum: wellNum,
                        apiNum: apiNum,
                        operator: operator,
                        county: county
                    }
                }}>
                    <Button>Edit Well Data</Button>
                </Link>
                <div>Well: {wellName} #{wellNum}</div>
                <div>Fluid Type: {wellData.wellType}</div>
                <div>API: {apiNum}</div>
                <div>Operator: {operator ? operator : "no data available"}</div>
                <div>Lease Name: {leaseName ? leaseName : "no data available"}</div>
                <div>County: {county ? county : "no data"}</div>
            </Card>
        </div>
    )
}

export default WellInfoList;