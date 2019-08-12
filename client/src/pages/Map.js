import React from "react";
import Map from "../components/Map";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";


class MapBoard extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Card>
                    <Map />
                </Card>
            </PageWrapper>
        )
    }
}

export default MapBoard