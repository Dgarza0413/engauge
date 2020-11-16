import React from 'react';

import Card from '../../components/Card'
import SectionTitle from '../../components/SectionTitle';
import FlexContainer from '../../components/FlexContainer';

import './style.css';

const SummarizedCard = ({ data, key }) => {
  return (
    <Card key={data[0]}>
      <FlexContainer>
        <SectionTitle mb="5px">
          {
            (data[0] === "gas")
              ? `${data[1]} MCF`
              : `${data[1]} BBLS`
          }
        </SectionTitle>
        <p style={{ marginBottom: '5px' }}>
        </p>
      </FlexContainer>
      <h6 className="mb-0">{data[0]} Production</h6>
    </Card>
  );
};

export default SummarizedCard;
