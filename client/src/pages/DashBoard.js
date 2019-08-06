import React from 'react';
import { VictoryBar, VictoryChart, VictoryLine } from 'victory';
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphSunBurst from "../components/GraphSunBurst";

const styles = {
    graph: {
        "height": "100vh"
    }
}

class DashBoard extends React.Component {
    render() {
        return (
            <div style={styles.graph}>
                <GraphLine />
                <GraphPie />
                <GraphSunBurst />
            </div>
        )
    }
}

export default DashBoard;