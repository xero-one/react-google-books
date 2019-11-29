/*Our imports section*/
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container } from "../../components/grid";
import { List, ListItem } from "../../components/list";
import BookButton from "../../components/bookButton";
import Jumbotron from "../../components/jumbotron";
import API from "../../utils/API";

class Results extends Component {
    state = {
        books: [],
        target: "",
        noResults: false
    };

    componentDidMount() {
        const data = this.props.location.data
        if (data && data.results.length > 0) {

            this.setState({
                books: data.results.filter((value, index) => index < 5),
                target: "_blank"
            });
        } else {
            this.setState({
                noResults: true
            });
        }
    }

    saveBook = book => {
        API.saveBook(book)
            .then(res => {
                const currentBooks = this.state.books;
                const filterBooks = currentBooks.filter(book => book.id !== res.data.id);
                this.setState({
                    books: filterBooks
                });
            })
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
                        <Link to="/">No results - click here to search again.</Link>
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
                        <button className="btn search-button" variant="light" size="lg" id="">
                            <Link to="/" role="button">New Search</Link>
                        </button>

                        <button className="btn save-button" variant="dark" size="lg" id="">
                            <Link to="/saved" role="button">Saved Books</Link>
                        </button>
                    </p>
                </Jumbotron>
                <Container>
                    <h2>Search Results</h2>
                    <List>
                        {this.state.books.map((book, index) => (
                            <ListItem key={book.id}>
                                <div className="date-div">
                                    <a
                                        key={"" + index + book.id}
                                        href={book.volumeInfo.infoLink}
                                        target={this.state.target}
                                    >
                                        {book.volumeInfo.title}
                                    </a>
                                    <p>Written By {book.volumeInfo.authors[0]}</p>
                                    <p>
                                        <img align="left" style={{ paddingRight: 10 }}
                                            src={book.volumeInfo.imageLinks.smallThumbnail} alt="new"
                                        />
                                        {book.volumeInfo.description}
                                    </p>
                                </div>
                                <div className="book-btn-div">
                                    <BookButton
                                        key={"" + book.id + index}
                                        btntype="info"
                                        disabled={book.volumeInfo.infoLink === "/"}
                                        onClick={() => this.saveBook({
                                            title: book.volumeInfo.title,
                                            author: book.volumeInfo.authors[0],
                                            description: book.volumeInfo.description,
                                            image: book.volumeInfo.imageLinks.smallThumbnail,
                                            link: book.volumeInfo.infoLink,
                                            _id: book.id
                                        })}
                                    >
                                        Save
                  </BookButton>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </div>
        );
    }
}

export default Results;