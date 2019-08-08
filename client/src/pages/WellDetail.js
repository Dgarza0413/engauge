import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
// import Axios from "axios";

const styles = {
    graph: {
        "height": "100vh"
    }
}

class WellDetail extends React.Component {
    // state = {
        
    // }
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