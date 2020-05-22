import React from 'react';
import SummarizedCard from '../Card/SummarizedCard';
import Card from '../Card';
import { Col } from 'react-bootstrap';


const DailyProdList = ({ data }) => {
    return (
        <>
            {
                Object.entries(data || '').map(e => {
                    return (
                        <>
                            {(e[0] === "date")
                                ? ""
                                : <Col md='4'>
                                    <Card>
                                        <SummarizedCard data={e} />
                                    </Card>
                                </Col>
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default DailyProdList;
