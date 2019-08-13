import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../GraphMarker";
import mapstyle from "./mapstyle.json";
import API from "../../utils/API";

class SimpleMap extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    state = {
        showInfoWindow: false,
        index: "",
        // lat: this.props.wellLocation.latitude,
        // lng: this.props.wellLocation.longitude
        lat: this.props.center.lat,
        lng: this.props.center.lng
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

    renderMarkers = () => {
        console.log("RENDER MARKERS");
        console.log(this.props.well)
        if (this.props.wellLocation && this.props.wellLocation.latitude && this.props.wellLocation.longitude) {
            return (
                <Marker
                    lat={this.props.wellLocation.latitude}
                    lng={this.props.wellLocation.longitude}
                    mouseOver={this.handleMouseOver(0)}
                    mouseOut={this.handleMouseExit}
                    index="0"
                >
                    {(this.state.showInfoWindow && this.state.index === 0) ? (
                        <div>
                            <p><strong>Well Name</strong>: Grassy Field</p>
                            <p><strong>Well Number</strong>: 01</p>
                            <p><strong>API Number</strong>: 42-111-1111</p>
                            <p><strong>Today's Production</strong>: 50 BBLs</p>
                            <p><strong>Total Production</strong>: 50 BBLs</p>
                        </div>
                    ) : false}
                </Marker>
            );
        } else {
            return ""
        }
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: this.props.height || "50vw", width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBbJqzjcKJqXYW9FEPfr7TPy21FND0iwLc' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{ styles: mapstyle }}
                >
                    {this.renderMarkers()}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;