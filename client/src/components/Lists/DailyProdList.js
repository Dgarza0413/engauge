import React from 'react';
import SummarizedCard from '../Card/SummarizedCard';
import Col from 'react-bootstrap/Col';


const DailyProdList = ({ data }) => {
    return (
        <>
            {
                Object.entries(data || '').map((e, i) => {
                    return (
                        <>
                            {(e[0] === "date")
                                ? ""
                                : <Col md={4}>
                                    <SummarizedCard key={i} data={e} />
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
