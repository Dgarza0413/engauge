import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
    width: "100%",
    height: "calc(100vh - 80px)",
};

const MapBox = () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiZGdhcnphMDQxMyIsImEiOiJjazg2dXNrMTMwam1qM2dsamgzazZ5cnM2In0.8WjcGhm-8DGMrZUD1z9A0A";
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [0, 0],
                zoom: 5
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapBox;