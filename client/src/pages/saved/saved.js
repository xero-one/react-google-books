import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/jumbotron/jumbotron";
import API from "../../utils/API";
import BookBtn from "../../components/book-btn";

class Saved extends Component {
  state = {
    books: [],
    target: "",
    noResults: false
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            books: res.data,
            target: "_blank"
          });
        } else {
          this.setState({
            noResults: true
          });
        }

      })
      .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.getSavedBooks())
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.noResults) {
      return (
        <div>
          <Jumbotron>
            <h1 className="display-4">REACT GOOGLE BOOKS SEARCH</h1>
            <p className="lead">Browse any book and save the ones of interest.</p>
            <hr className="my-4" />
            <p className="lead">
                <button className="search-button" variant="light" size="lg" id=""> 
                <Link to="/" role="button">New Search</Link>
                </button>

                <button className="save-button" variant="dark" size="lg" id="">
                <Link to="/saved" role="button">Saved Books</Link>
                </button>
            </p>
          </Jumbotron>

          <Container>
            <Link to="/">You have no saved books. Click here to find some.</Link>
          </Container>
        </div>
      )
    }
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">REACT GOOGLE BOOKS SEARCH</h1>
          <p className="lead">Browse any book and save the ones of interest.</p>
          <hr className="my-4" />
          <p className="lead">
          <button className="search-button" variant="light" size="lg" id=""> 
                <Link to="/" role="button">New Search</Link>
                </button>

                <button className="save-button" variant="dark" size="lg" id="">
                <Link to="/saved" role="button">Saved Books</Link>
                </button>
          </p>
        </Jumbotron>

        <Container>
          <h2>Saved Books</h2>
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <div className="date-div">
                  <a
                    key={book._id + "link"}
                    href={book.link}
                    target={this.state.target}
                  >
                    <h4>{book.title}</h4>
                  </a>
                  <p>Written By {book.author}</p>
                  <p>
                  <img align="left" style={{paddingRight:10}}
                    src={book.image} alt="new"
                  />
                    {book.description}
                  </p>
                </div>
                <div className="book-btn-div">
                  <BookBtn
                    key={book._id + "btn"}
                    btntype="info"
                    id={book._id}
                    disabled={book.link === "/"}
                    onClick={() => this.deleteBook(book._id)}
                  >
                    Remove
                </BookBtn>
                </div>
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    );
  }
}

export default Saved;