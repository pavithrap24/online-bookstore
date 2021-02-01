import React from "react";
import "./books.css";
import Book from "./book/book";

const books = (props) => {
  const booksData = props.booksData;
  const books = booksData.map((bookData) => {
    return (
      <Book
        key={bookData.bookID}
        bookID={bookData.bookID}
        title={bookData.title}
        authors={bookData.authors}
        avgRating={bookData.average_rating}
        isbn={bookData.isbn}
        languageCode={bookData.language_code}
        ratingsCount={bookData.ratings_count}
        price={bookData.price}
        addToCart={props.addToCart}
        bookData={bookData}
      />
    );
  });

  return <div className="booksDivClass">{books ? books : null}</div>;
};

export default books;
