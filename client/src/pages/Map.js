import React, { useEffect, useState } from "react";
// import Map from "../components/Map/Map";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import API from "../utils/API";
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