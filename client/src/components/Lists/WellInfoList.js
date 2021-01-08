import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import SectionTitle from "../SectionTitle/index";

// components
import { Col, Row, Button } from 'react-bootstrap';
import { StringInput } from '../Form';

const WellInfoList = ({ wellData }) => {
    const { wellName, wellNum, wellType, apiNum, operator, leaseName, county } = wellData

    return (
        <Card>
            <SectionTitle>General Details</SectionTitle>
            <Row>
                <Col xs={12} sm={4}>
                    <StringInput
                        label="well Name"
                        name="testDate"
                        value={wellName || 'no data'}
                    />
                </Col>
                <Col xs={12} sm={4}>
                    <StringInput
                        label="well Number"
                        name="wellNum"
                        value={wellNum || "no data"}
                    />
                </Col>
                <Col xs={12} sm={4}>
                    <StringInput
                        label="well Type"
                        name="wellType"
                        value={wellType || "no data"}
                    />
                </Col>
                <Col xs={12} sm={4}>
                    <StringInput
                        label="api Num"
                        name="apiNum"
                        value={apiNum || "no data"}
                    />
                </Col>
                <Col xs={12} sm={4}>
                    <StringInput
                        label="operator"
                        name="operator"
                        value={operator || "no data"}
                    />
                </Col>
                <Col xs={12} sm={4}>
                    <StringInput
                        label="lease Name"
                        name="leaseName"
                        value={leaseName || "no data"}
                    />
                </Col>
                <Col xs={12} sm={4}>
                    <StringInput
                        label="county"
                        name="county"
                        value={county || "no data"}
                    />
                </Col>
                <Col xs={12} sm={12}>
                    <StringInput
                        label="Location"
                        name="location"
                        value={county || "no data"}
                    />
                </Col>
                <Col xs={12} sm={4}>
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
                        <Button color="primary">Edit Well Data</Button>
                    </Link>
                </Col>
            </Row>
        </Card>
    )
}

export default WellInfoList;