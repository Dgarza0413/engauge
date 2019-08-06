import React from "react";
import PageWrapper from "../components/PageWrapper";
import API from "../utils/API";

class WellProdForm extends React.Component {
    state = {
        apiNum: "",
        oil: "",
        gas: "",
        water: "",
        casingPSI: "",
        tubingPSI: "",
        choke: "",
        date: ""
    };

    //we have to get the api that we wish to update
    componentDidMount() {
        API.getWellId(this.props.match.params.id)
            .then(res => {
                this.setState({ apiNum: res.data })
            })
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const obj = {
            oil: this.state.oil,
            gas: this.state.gas,
            water: this.state.water,
            casingPSI: this.state.casingPSI,
            tubingPSI: this.state.tubingPSI,
            choke: this.state.choke,
            date: this.state.data
        }
        API.postWellProd(obj)
            .then(res => {
                console.log(res.data.items);
                this.setState({
                    obj: res.data.items
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <PageWrapper>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="oil">oil:</label>
                        <input
                            value={this.state.oil}
                            onChange={this.handleInputChange}
                            name="oil"
                            type="text"
                            className="form-control"
                            placeholder="oil"
                            id="oil"
                        />
                        <label htmlFor="gas">gas:</label>
                        <input
                            value={this.state.gas}
                            onChange={this.handleInputChange}
                            name="gas"
                            type="text"
                            className="form-control"
                            placeholder="gas"
                            id="gas"
                        />
                        <label htmlFor="water">water:</label>
                        <input
                            value={this.state.water}
                            onChange={this.handleInputChange}
                            name="water"
                            type="text"
                            className="form-control"
                            placeholder="water"
                            id="water"
                        />
                        <label htmlFor="casingPSI">casingPSI:</label>
                        <input
                            value={this.state.casingPSI}
                            onChange={this.handleInputChange}
                            name="casingPSI"
                            type="text"
                            className="form-control"
                            placeholder="casingPSI"
                            id="casingPSI"
                        />
                        <label htmlFor="tubingPSI">tubingPSI:</label>
                        <input
                            value={this.state.tubingPSI}
                            onChange={this.handleInputChange}
                            name="tubingPSI"
                            type="text"
                            className="form-control"
                            placeholder="tubingPSI"
                            id="tubingPSI"
                        />
                        <label htmlFor="choke">choke:</label>
                        <input
                            value={this.state.choke}
                            onChange={this.handleInputChange}
                            name="choke"
                            type="text"
                            className="form-control"
                            placeholder="choke"
                            id="choke"
                        />
                        <label htmlFor="Date">Date:</label>
                        <input
                            value={this.state.Date}
                            onChange={this.handleInputChange}
                            name="Date"
                            type="text"
                            className="form-control"
                            placeholder="Date"
                            id="Date"
                        />
                        <br />
                        <button className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </PageWrapper>
        )
    }
}

export default WellProdForm;