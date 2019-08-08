import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../GraphMarker";
import API from "../../utils/API"
import mapstyle from "./mapstyle.json";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const heatMapData = {
//     //positions are going to be our well locations
//     positions: [
//         { lat: 30.266926, lng: -97.750519 },
//         { lat: 30.306926, lng: -96.3539 },
//     ],
//     //options seem to be the weight of each wells production
//     options: {
//         radius: 70,
//         opacity: 0.6,
//     }
// }
class SimpleMap extends Component {
    state = {
        showInfoWindow: false,
        index: ""
    }

    static defaultProps = {
        center: {
            lat: 30.266926,
            lng: -97.750519
        },
        zoom: 11
    };

    handleMouseOver = (index) => {
        return () => {
            this.setState({ showInfoWindow: true, index: index });
        }
    }

    handleMouseExit = (event) => {
        // event.preventDefault();
        this.setState({ showInfoWindow: false });
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBbJqzjcKJqXYW9FEPfr7TPy21FND0iwLc' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{ styles: mapstyle }}
                // heatmapLibrary={true}
                // heatmap={heatMapData}
                >
                    <Marker
                        lat={30.266926}
                        lng={-97.750519}
                        mouseOver={this.handleMouseOver(0)}
                        mouseOut={this.handleMouseExit}
                        index="0"
                    >
                        {(this.state.showInfoWindow && this.state.index === 0) ? (
                            <div>
                                <p>Well Name:</p>
                                <p>Well No.:</p>
                                <p>API No.:</p>
                                <p>Today's Production:</p>
                                <p>Total Production:</p>
                            </div>
                        ) : console.log(this.state.showWindowInfo + ", " + this.state.index)}
                    </Marker>
                    <Marker
                        lat={30.306926}
                        lng={-97.850519}
                        mouseOver={this.handleMouseOver(1)}
                        mouseOut={this.handleMouseExit}
                        index="1"
                    >
                        {(this.state.showInfoWindow && this.state.index === 1) ? (
                            <div>
                                <p>Well Name:</p>
                                <p>Well No.:</p>
                                <p>API No.:</p>
                                <p>Today's Production:</p>
                                <p>Total Production:</p>
                            </div>
                        ) : console.log("false")}
                    </Marker>
                    <Marker
                        lat={30.2506926}
                        lng={-97.790519}
                        mouseOver={this.handleMouseOver(2)}
                        mouseOut={this.handleMouseExit}
                        index="2"
                    >
                        {(this.state.showInfoWindow && this.state.index === 2) ? (
                            <div>
                                <p>Well Name:</p>
                                <p>Well No.:</p>
                                <p>API No.:</p>
                                <p>Today's Production:</p>
                                <p>Total Production:</p>
                            </div>
                        ) : console.log("false")}
                    </Marker>
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;

//wellname
//well no
//api
//today's production
//total production