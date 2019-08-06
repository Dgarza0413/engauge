import React from 'react';
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphSunBurst from "../components/GraphSunBurst";
import PageWrapper from "../components/PageWrapper";

const styles = {
    graph: {
        "height": "100vh"
    }
}

class DashBoard extends React.Component {
    render() {
        return (
            <PageWrapper>
                <div style={styles.graph}>
                    <GraphLine />
                    <GraphPie />
                    <GraphSunBurst />
                </div>
            </PageWrapper>
        )
    }
}

export default DashBoard;