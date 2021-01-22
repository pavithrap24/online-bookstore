import React, { Component } from "react";
import NavBar from "../navBar/navBar";
import Books from "../books/books";

class HomePage extends Component {
  constructor() {
    super();
    this.state = { booksData: [], cartCount: 0, searchResults: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json",
      {
        crossDomain: true,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const jsonData = await response.json();
    const books = jsonData
      .sort((books) => books.average_rating)
      .map((bookData) => {
        return bookData;
      });
    await this.setState({ booksData: books });
  }

  cartClickHandler() {
    console.log("cart clicked");
  }

  onChangeSearchHandler(event) {
    const searchResults = this.state.booksData
      .filter((books) => String(books.title).includes(event.target.value))
      .map((booksData) => {
        return booksData;
      });
    this.setState({ searchResults: searchResults });
  }

  addToCartClickHandler() {
    this.setState((prevState) => {
      return {
        ...prevState,
        cartCount: prevState.cartCount + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <NavBar
          cartCount={this.state.cartCount}
          cartClick={() => this.cartClickHandler()}
          onChangeSearch={(event) => this.onChangeSearchHandler(event)}
        />
        {this.state.searchResults.length > 0 ? (
          <Books
            booksData={this.state.searchResults}
            addToCart={() => this.addToCartClickHandler()}
          />
        ) : (
          <Books
            booksData={this.state.booksData}
            addToCart={() => this.addToCartClickHandler()}
          />
        )}
      </div>
    );
  }
}

export default HomePage;
