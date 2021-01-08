import React from "react";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import MapBox from "../components/Map";

const MapBoard = () => {
    return (
        <>
            <PageWrapper>
                <Card>
                    <MapBox />
                </Card>
            </PageWrapper>
        </>
    )
}

export default MapBoard;