import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Table from '.';
import TableDense from './Table';
import Button from '../Button';
import PageWrapper from '../PageWrapper';
import SectionTitle from '../SectionTitle';
import FlexContainer from '../FlexContainer';
import API from '../../utils/API';
import DenseTable from './BasicTable';

const WellTable = () => {
  const [wells, setWells] = useState([]);

  // useSelector()

  useEffect(() => {
    getWellData()
  }, []);

  const getWellData = async () => {
    try {
      const res = await API.getAllWellData()
      setWells(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageWrapper>
      <FlexContainer>
        <SectionTitle>Well Overview</SectionTitle>
        <Link to="/new-well">
          <Button mb="15px">+ Add Well</Button>
        </Link>
      </FlexContainer>
      <Table wells={wells} key={wells._id} />
    </PageWrapper>
  );
};

export default WellTable;
