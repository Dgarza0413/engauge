import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";

const styles = {
    graph: {
        "height": "100vh"
    }
}

class WellDetail extends React.Component {
    render() {
        return (
            <PageWrapper>
                <div style={styles.graph}>
                    <Map />
                    <GraphLine />
                    <GraphBar />
                </div>
            </PageWrapper>
        )
    }
}

export default WellDetail;