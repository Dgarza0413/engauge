import React from 'react';
import SummarizedCard from '../Card/SummarizedCard';
import Card from '../Card';
import { Row } from 'react-bootstrap';


const DailyProdList = () => {
    return (
        <Row>
            <Card>
                <SummarizedCard />
            </Card>
        </Row>
    )
}

export default DailyProdList;
