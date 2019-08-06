import React, { Component } from "react";
import API from "../../utils/API";

class TestForm extends Component {
    state = {
      apiNum: ""
    }

  

  

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.apiNum) {

      const apiNum = this.state.apiNum.trim();

      API.addWell(apiNum)
        .then(res => {

          console.log(res.data.items);

          this.setState({
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>
            API Number:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label htmlFor="wellNum">wellNum:</label>
          <input
            value={this.state.wellNum}
            onChange={this.handleInputChange}
            name="wellNum"
            type="text"
            className="form-control"
            placeholder=""
            id="wellNum"
          />
          <label htmlFor="wellName">wellName:</label>
          <input
            value={this.state.wellName}
            onChange={this.handleInputChange}
            name="wellName"
            type="text"
            className="form-control"
            placeholder=""
            id="wellName"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default TestForm;