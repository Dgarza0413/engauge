import React, { Component } from "react";
import API from "../../utils/API";

class TestForm extends Component {
  state = {
    title: "",
    toResults: false,
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {

      const title = this.state.title.trim();

      API.searchBook(title)
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
          <label htmlFor="search">Search:</label>
          <input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            type="text"
            className="form-control"
            placeholder="Search For a Book"
            id="search"
          />
          <br />
          <button onClick={this.handleFormSubmit} className="btn btn-primary">
            Search
          </button>
          <ResultsList 
            items = {this.state.results}
          />
        </div>
      </form>
    );
  }
}

export default TestForm;