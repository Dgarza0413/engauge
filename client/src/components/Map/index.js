import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../GraphMarker";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const heatMapData = {
    //positions are going to be our well locations
    positions: [
        { lat: 30.266926, lng: -97.750519 },
        { lat: 30.306926, lng: -97.750519 },
    ],
    //options seem to be the weight of each wells production
    options: {
        radius: 70,
        opacity: 0.6,
    }
}
class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 30.266926,
            lng: -97.750519
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBbJqzjcKJqXYW9FEPfr7TPy21FND0iwLc' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={heatMapData}
                >
                    <Marker
                        lat={30.266926}
                        lng={-97.750519}
                        name="My Marker"
                        color="blue"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;