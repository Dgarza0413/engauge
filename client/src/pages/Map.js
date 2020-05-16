import React, { useEffect, useState } from "react";
import Map from "../components/Map/Map";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import API from "../utils/API";

const MapBoard = () => {


    useEffect(() => {
        getAllWellData()
    }, [])
    const getAllWellData = async () => {
        try {
            const data = await API.getAllWellData()
            console.log(data)
                .then(res => {
                    for (let i = 0; i < res.data.length; i++) {
                        this.setState({
                            lat: res.data[i].latLong.latitude,
                            long: res.data[i].latLong.longtitude
                        })
                    }
                })
        } catch (error) {

        }

    }
    return (
        <>
            <PageWrapper>
                <Card>
                    <Map />
                </Card>
            </PageWrapper>
        </>
    )
}

export default MapBoard;


// class MapBoard extends React.Component {
//     state = {
//         well: [],
//         lat: {},
//         long: {},
//     }

//     componentDidMount() {
//         API.getAllWellData()
//             .then(res => {
//                 for (let i = 0; i < res.data.length; i++) {
//                     this.setState({
//                         lat: res.data[i].latLong.latitude,
//                         long: res.data[i].latLong.longtitude
//                     })
//                 }
//             })
//     }

//     render() {
//         return (
//             <PageWrapper>
//                 <Card>
//                     <Map />
//                 </Card>
//             </PageWrapper>
//         )
//     }
// }

// export default MapBoard

// export default class MapBoard extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             viewport: {
//                 fitBounds: undefined,
//                 latitude: 30.25844534968869,
//                 longitude: -97.80411406405295,
//                 zoom: 11,
//                 sites: undefined,
//                 // sites: sites,
//                 width: 'calc(90vw - 2px)',
//                 height: '50vh'
//             },
//             showPopup: true
//             // use conditional to set zoom level based on screen width
//         };
//     }

//     componentDidMount() {
//         this.setState(({ sites: 45 }))
//         this.buildLocationList();
//     }
//     // onDrag = () => {
//     //   if (this.state.viewport.site) {
//     //     this.setState({ site: undefined });
//     //   }
//     // }
//     goToLocation = (coords) => {
//         const viewport = {
//             ...this.state.viewport,
//             longitude: coords[1],
//             latitude: coords[0],
//             zoom: 14,
//             transitionDuration: 5000,
//             // transitionInterpolator: new FlyToInterpolator(),
//         };
//         this.setState({ viewport })
//     }

//     buildLocationList = () => {
//         locations.forEach(function (site, i) {
//             let locations = document.getElementById('locations');

//             let location = locations.appendChild(document.createElement('div'));
//             location.id = "location-" + site.properties.id;
//             location.className = 'item';

//             let link = location.appendChild(document.createElement('a'));
//             link.href = '#';
//             link.id = site.properties.id;
//             link.innerHTML = site.properties.name;

//             let details = location.appendChild(document.createElement('div'));
//             details.innerHTML = site.properties.description;

//             link.addEventListener('click', function (e) {
//                 // let coords = sites.locations[site.properties.id].geometry.coordinates;

//                 this.goToLocation(coords);
//             })
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <ReactMapGL />
//             </div>
//         )
//     }
// }

