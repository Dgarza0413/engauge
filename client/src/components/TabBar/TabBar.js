import React from 'react';
import ReportTable from '../Table/ReportTable';

import Table from '../Table';
import { Tabs, Tab } from 'react-bootstrap';

const TabPanel = ({ well, reportData }) => {

    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
        >
            <Tab
                eventKey="home"
                title="Production">
                <Table data={well} />
            </Tab>
            <Tab
                eventKey="profile"
                title="Reports"
            >
                <Table data={reportData} />
                {/* <ReportTable
                    reportData={reportData || []}
                    key={well._id}
                /> */}
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
