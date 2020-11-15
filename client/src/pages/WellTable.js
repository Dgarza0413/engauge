import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import Table from '../components/Table';
import Button from '../components/Button';
import PageWrapper from '../components/PageWrapper';
import SectionTitle from '../components/SectionTitle';
import FlexContainer from '../components/FlexContainer';
import API from '../utils/API';

const WellTable = () => {
  const [data, setData] = useState([]);

  const getWellData = async () => {
    try {
      const res = await API.getAllWellData()
      await setData(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWellData()
  }, []);

  return (
    <PageWrapper>
      <FlexContainer>
        <SectionTitle>Well Overview</SectionTitle>
        <Link to="/new-well">
          <Button>+ Add Well</Button>
        </Link>
      </FlexContainer>
      <Table data={data} key={data._id} />
    </PageWrapper>
  );
};

export default WellTable;
