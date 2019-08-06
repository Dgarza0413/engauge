import React from "react";
import Map from "../components/Map";
import PageWrapper from "../components/PageWrapper";


class MapBoard extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Map />
            </PageWrapper>
        )
    }
}

export default MapBoard