import React from 'react';
<<<<<<< HEAD
import GraphLine from "../components/GraphLine";
import GraphPie from "../components/GraphPie";
import GraphSunBurst from "../components/GraphSunBurst";

const styles = {
    graph: {
        "height": "100vh"
    }
}
=======
import { VictoryBar, VictoryChart, VictoryLine } from 'victory';
import OutlinedTextFields from "../components/FormInput";
>>>>>>> 95d9a8222f1a131483f0146f2b5c499efc8285bb

class DashBoard extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <div style={styles.graph}>
                <GraphLine />
                <GraphPie />
                <GraphSunBurst />
=======
            <div>
                <VictoryChart>
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 4 },
                            { x: 6, y: 4 },
                            { x: 7, y: 7 }
                        ]}
                    />
                </VictoryChart>
                <OutlinedTextFields />
>>>>>>> 95d9a8222f1a131483f0146f2b5c499efc8285bb
            </div>
        )
    }
}

export default DashBoard;