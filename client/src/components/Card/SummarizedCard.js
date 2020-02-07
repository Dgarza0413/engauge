import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import FlexContainer from '../../components/FlexContainer';
import './style.css';

const SummarizedCard = (name) => {
  console.log(name)
  return (
    <>
      <FlexContainer>
        <SectionTitle mb="5px"></SectionTitle>
        <p style={{ marginBottom: '5px' }}>
          <strong></strong>
        </p>
      </FlexContainer>
      <h6 className="mb-0">Production</h6>
    </>
  );
};

export default SummarizedCard;
