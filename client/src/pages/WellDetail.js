import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import API from '../utils/API';

// components
import GraphLine from '../components/Graph/Line';
import GraphBar from '../components/Graph/BarGraph';
import PageWrapper from '../components/PageWrapper';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import TabPanel from '../components/TabBar/TabBar';
import Drawer from '../components/Drawer/Drawer';
import SeconadaryWrapper from '../components/PageWrapper/SecondaryWrapper';

import MapBox from '../components/Map';
import WellForm from '../components/Form/WellForm';

const WellDetail = (props) => {
  const [wellData, setWellData] = useState({});
  const [formData, setFormData] = useState({});

  console.log(formData)

  const getWellIdData = async () => {
    try {
      const getWell = await API.getWellId(props.match.params.id)
      const res = await getWell.data

      setFormData({ ...res })

      const totalGas = res.productionId
        .map(prodData => prodData.gas)
        .reduce(function (accumulator, prod) {
          return accumulator + prod;
        });
      const totalOil = res.productionId
        .map(prodData => prodData.oil)
        .reduce(function (accumulator, prod) {
          return accumulator + prod;
        });
      const totalWater = res.productionId
        .map(prodData => prodData.water)
        .reduce(function (accumulator, prod) {
          return accumulator + prod;
        });

      setWellData({
        res: res,
        wellName: res.wellName,
        wellNum: res.wellNum,
        tempLat: res.coordinates.latitude,
        tempLng: res.coordinates.longitude,
        totalOil: totalOil || 0,
        totalGas: totalGas || 0,
        totalWater: totalWater || 0,
        productionId: res.productionId,
        reportId: res.reportId
      });

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getWellIdData()
  }, []);

  return (
    <PageWrapper>
      <SeconadaryWrapper>
        <Drawer id={props.match.params.id} />
        <SectionTitle>Well Detail</SectionTitle>
        <Container>
          <Row>
            <Col lg="12">
              {formData && <WellForm {...props} data={formData} api={formData.apiNum} readOnly={true} />}
              <Card>
                <div style={{ height: '40vw' }}>
                  <GraphLine
                    well={wellData.productionId || []}
                    key={wellData.id}
                  />
                </div>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <SectionTitle>Location</SectionTitle>
                <MapBox height="35vw" />
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <SectionTitle>Prod Total</SectionTitle>
                <GraphBar
                  class="half-pie"
                  oil={wellData.totalOil}
                  gas={wellData.totalGas}
                  water={wellData.totalWater}
                  key={wellData.id}
                />
              </Card>
            </Col>
          </Row>
          <Card padding="0px">
            <TabPanel
              prodData={wellData.productionId || []}
              reportData={wellData.reportId || []}
              key={wellData._id}
            />
          </Card>
        </Container>
      </SeconadaryWrapper>
    </PageWrapper >
  );
};

export default WellDetail;