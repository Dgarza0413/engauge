import React from "react";
import Map from "../components/Map";
import GraphLine from "../components/GraphLine";
import GraphBar from "../components/GraphBar";
import PageWrapper from "../components/PageWrapper";
import API from "../utils/API";


const styles = {
    graph: {
        "height": "100vh"
    }
}

// function to get data based on unique well


// 

class WellDetail extends React.Component {
    state = {
        well: {}
    };

    componentDidMount() {
        API.getWellId(this.props.match.params.id)
            .then(res => { console.log(res) })
            .catch(err => console.log(err))
    }


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