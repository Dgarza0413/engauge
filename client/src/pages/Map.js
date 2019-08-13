import React from "react";
import Map from "../components/Map";
import PageWrapper from "../components/PageWrapper";
<<<<<<< HEAD
import Card from "../components/Card";
=======
import API from "../utils/API";
>>>>>>> bc8b95105a18c1dc34ba14fea56f6153c004931f


class MapBoard extends React.Component {
    state = {
        well: {},
        lat: {},
        long: {},
    }

    componentDidMount() {
        API.getAllWells()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    console.log(res.data[i])
                    console.log(res.data[i].latLong.latitude)
                    console.log(res.data[i].latLong.longitude)
                    this.setState({
                        lat: res.data[i].latLong.latitude,
                        long: res.data[i].latLong.longtitude
                    })
                }
            })
    }

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