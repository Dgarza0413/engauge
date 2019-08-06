import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";

const styles = {
    graph: {
        "height": "100vh"
    }
}

class WellDetail extends React.Component {
    render() {
        return (
            <div style={styles.graph}>
                <Map />
                <GraphLine />
                <GraphBar />
            </div>

        )
    }
}

export default WellDetail;