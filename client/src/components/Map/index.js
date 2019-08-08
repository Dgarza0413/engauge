import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../GraphMarker";
<<<<<<< HEAD
import API from "../../utils/API"
=======
import mapstyle from "./mapstyle.json";
>>>>>>> 980fa0044fe0832891dad9133c949efa1f213a02

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const heatMapData = {
    //positions are going to be our well locations
    positions: [
        { lat: 30.266926, lng: -97.750519 },
<<<<<<< HEAD
        { lat: 30.306926, lng: -97.750519 }
=======
        { lat: 30.306926, lng: -96.3539 },
>>>>>>> 980fa0044fe0832891dad9133c949efa1f213a02
    ],
    //options seem to be the weight of each wells production
    options: {
        radius: 70,
        opacity: 0.6,
    }
}
class SimpleMap extends Component {
    state = {
        well: this.props.well
    }
    static defaultProps = {
        center: {
            lat: 30.266926,
            lng: -97.750519
        },
        zoom: 11
    };

    log = () => {
        console.log(this.state.well)
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBbJqzjcKJqXYW9FEPfr7TPy21FND0iwLc' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{ styles: mapstyle}}
                    // heatmapLibrary={true}
                    // heatmap={heatMapData}
                >
                    <Marker
                        lat={30.266926}
                        lng={-97.750519}
                        // color="blue"
                    />
                    <Marker
                        lat={30.306926}
                        lng={-97.850519}
                    />
                    <Marker
                        lat={30.2506926}
                        lng={-97.790519}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;