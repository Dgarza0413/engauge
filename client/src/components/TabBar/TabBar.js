import React from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import Table from '../Table';

const TabPanel = ({ prodData, reportData }) => {

    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
        >
            <Tab
                eventKey="home"
                title="Production">
                <Table type={"production"} data={prodData} />
            </Tab>
            <Tab
                eventKey="profile"
                title="Reports"
            >
                <Table type={"report"} data={reportData} />
            </Tab>
            <Tab
                eventKey="recomp"
                title="Recompletion">
                Recomplete
            </Tab>
            <Tab
                eventKey="Revenue"
                title="Revenue">
                Revenue
            </Tab>
        </Tabs>
    );
}

export default TabPanel;
