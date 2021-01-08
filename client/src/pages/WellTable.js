import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import Table from '../components/Table';
import Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import SectionTitle from '../components/SectionTitle';
import FlexContainer from '../components/FlexContainer';

import useFetch from '../hooks/useFetch';

import URI from '../utils/URI';

const WellTable = () => {
  const [value, handleFetchGET] = useFetch();

  useEffect(() => {
    handleFetchGET(URI.allWell_URI())
  }, []);

  return (
    <PageWrapper>
      <FlexContainer>
        <SectionTitle>Well Overview</SectionTitle>
        {/* <Link to="/well/new"> */}
        <Link to="/submit/well/add">
          <Button>+ Add Well</Button>
        </Link>
      </FlexContainer>
      <Table data={value} key={value._id} />
    </PageWrapper>
  );
};

export default WellTable;
