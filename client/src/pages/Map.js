import React, { useEffect } from "react";
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
            // .then(res => {
            //     for (let i = 0; i < res.data.length; i++) {
            //         this.setState({
            //             lat: res.data[i].latLong.latitude,
            //             long: res.data[i].latLong.longtitude
            //         })
            //     }
            // })
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

export default MapBoard