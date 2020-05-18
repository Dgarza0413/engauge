import React from 'react';
import ProdTable from '../Table/ProdTable';
import ReportTable from '../Table/ReportTable';
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
                <ProdTable
                    well={well || []}
                    key={well._id} />
            </Tab>
            <Tab
                eventKey="profile"
                title="Reports"
            >
                <ReportTable
                    reportData={reportData || []}
                    key={well._id}
                />
            </Tab>
        </Tabs>
    );
}

export default TabPanel;
