import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import FlexContainer from '../../components/FlexContainer';
import './style.css';

const SummarizedCard = ({ data }) => {
  console.log(data)
  return (
    <>
      <FlexContainer>
        <SectionTitle mb="5px">
          {
            (data[0] === "gas")
              ? `${data[1]} MCF`
              : `${data[1]} BBLS`
          }
        </SectionTitle>
        <p style={{ marginBottom: '5px' }}>
          <strong></strong>
        </p>
      </FlexContainer>
      <h6 className="mb-0">{data[0]} Production</h6>
    </>
  );
};

export default SummarizedCard;
