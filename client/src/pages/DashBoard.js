import React from 'react';
import { VictoryBar, VictoryChart, VictoryLine } from 'victory';
import OutlinedTextFields from "../components/FormInput";

class DashBoard extends React.Component {
    render() {
        return (
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
            </div>
        )
    }
}

export default DashBoard;