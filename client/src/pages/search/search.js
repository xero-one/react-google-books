import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Jumbotron from "../../components/jumbotron";
import API from "../../utils/API";
import { Container } from "../../components/grid";
import { Input, FormButton } from "../../components/form";

class Search extends Component {
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

      API.searchGoogleBooks(title)
        .then(res => {

          console.log(res.data.items);

          this.setState({
            toResults: true,
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.toResults) {
      return <Redirect to={{
        pathname: "/results",
        data: { results: this.state.results }
      }} />
    }
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">REACT GOOGLE BOOKS SEARCH</h1>
          <p className="lead">Browse any book and save the ones of interest.</p>
          <hr className="my-4" />
          <p className="lead">
            <button className="btn search-button" variant="light" size="lg" id="">  
            <Link to="/" role="button">New Search</Link>
            </button>

            <button className="btn save-button" variant="dark" size="lg" id="">
            <Link to="/saved" role="button">Saved Books</Link>
            </button>
          </p>
        </Jumbotron>

        <Container>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Book Title"
              placeholder="Search Book Title (required)"
            />
            <FormButton         
              onClick={this.handleFormSubmit}
              className="btn btn-secondary search-button"
              id="search-button"
            >
              Search
            </FormButton>
          </form>
        </Container>
      </div>
    );
  }
}

export default Search;