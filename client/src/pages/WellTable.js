import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Components
import Table from '../components/Table';
// import Button from '../Button';
import PageWrapper from '../components/PageWrapper';
import SectionTitle from '../components/SectionTitle';
import FlexContainer from '../components/FlexContainer';
import API from '../utils/API';

const WellTable = () => {
  const [wells, setWells] = useState([]);

  console.log(wells)


  const getWellData = async () => {
    try {
      const res = await API.getAllWellData()
      await setWells(res.data)
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
      <Table wells={wells} key={wells._id} />
    </PageWrapper>
  );
};

export default WellTable;
