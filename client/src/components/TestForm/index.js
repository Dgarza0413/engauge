import React, { Component } from "react";
import API from "../../utils/API";

class TestForm extends Component {
  state = {
    apiNum: "",
    wellNum: "",
    wellName: "",
    wellData: {}
  };

  handleChangeFor = (propertyName) => (event) => {
    const {wellData} = this.state;
    const newWellData = {
      ...wellData,
      [propertyName]: event.target.value
    };
    this.setState({ wellData: newWellData });
  }

  handleFormSubmit = (wellData, event) => {
    event.preventDefault();
    if (this.state.wellData) {

      API.addWell(wellData)
        .then(res => {

          console.log(res.data.items);

          this.setState({
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="apiNum">API No.:</label>
          <imput 
          type="text" 
          onChange={this.handleChangeFor("apiNum")} 
          value={this.state.wellData.apiNum} 
          name="apiNum"
          className="form-control" 
          placeholder=""
          id="apiNum"/>
          <label htmlFor="wellNum">Well No.:</label>
          <imput 
          type="text" 
          onChange={this.handleChangeFor("wellNum")} 
          value={this.state.wellData.wellNum} 
          name="wellNum"
          className="form-control" 
          placeholder=""
          id="wellNum" />
          <label htmlFor="wellName">Well Name:</label>
          <imput 
          type="text" 
          onChange={this.handleChangeFor("wellName")} 
          value={this.state.wellData.wellName} 
          name="wellName"
          className="form-control" 
          placeholder=""
          id="wellName" />          
          <br />
          <button onClick={this.handleFormSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default TestForm;