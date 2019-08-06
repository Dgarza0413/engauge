import React, { Component } from "react";
import API from "../../utils/API";

class TestForm extends Component {
    state = {
      apiNum: "",
      wellNum: "",
      wellName: ""
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    
  
    handleFormSubmit = event => {
      event.preventDefault();
        const obj = {
            apiNum: this.state.apiNum,
            wellNum: this.state.wellNum,
            wellName: this.state.wellName
        }
        API.addWell(obj)
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
        <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
            <label htmlFor="apiNum">apiNum:</label>
            <input
                value={this.state.apiNum}
                onChange={this.handleInputChange}
                name="apiNum"
                type="text"
                className="form-control"
                placeholder="apiNum"
                id="apiNum"
        />
            <label htmlFor="wellNum">wellNum:</label>
            <input
                value={this.state.wellNum}
                onChange={this.handleInputChange}
                name="wellNum"
                type="text"
                className="form-control"
                placeholder="wellNum"
                id="wellNum"
        />
            <label htmlFor="wellName">wellName:</label>
            <input
                value={this.state.wellName}
                onChange={this.handleInputChange}
                name="wellName"
                type="text"
                className="form-control"
                placeholder="wellName"
                id="wellName"
        />
            <br />
            <button className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      );
    }
  }

export default TestForm;