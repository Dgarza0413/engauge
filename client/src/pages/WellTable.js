import React from "react";
import Table from "../components/Table";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import FlexContainer from "../components/FlexContainer";
import { Link } from 'react-router-dom';
import Button from "../components/Button";
import Axios from "axios";

class WellTable extends React.Component {
    state = {
        wells: []
    };

    componentDidMount() {
        Axios.get("/api/wells").then((res) => {
            this.setState({ wells: res.data })
        })
    }
    

    render() {
        return (
            <PageWrapper>
                <FlexContainer>
                    <SectionTitle>Well Overview</SectionTitle>
                    <Link to="/new-well">
                        <Button mb="15px">+ Add Well</Button>
                    </Link>
                </FlexContainer>
                    <Table wells={this.state.wells}
                        key={this.state.wells._id} />
            </PageWrapper>
        )
    }
}

export default WellTable;