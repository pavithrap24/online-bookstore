import React, { useEffect } from "react";
import Books from "../books/books";
import { initialFetch, addToCart } from "../../store/books";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  const { initialBooksData, searchResults, searched, query } = useSelector(
    (state) => state.booksReducer
  );

  useEffect(() => {
    async function getApiData() {
      const response = await fetch(
        "https://api.jsonbin.io/b/6012e3aac9033f74c42796f4",
        {
          crossDomain: true,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const jsonData = await response.json();
      const initialBooksData = jsonData
        .sort((books) => books.average_rating)
        .map((bookData) => {
          return bookData;
        });
      dispatch(initialFetch({ initialBooksData: initialBooksData }));
    }
    getApiData();
  }, [dispatch]);

  const addToCartClickHandler = (bookID) => {
    dispatch(addToCart({ bookID: bookID }));
  };

  return (
    <div>
      {searchResults && searchResults.length > 0 ? (
        <Books
          booksData={searchResults}
          addToCart={() => addToCartClickHandler()}
        />
      ) : searched && query ? (
        <p>NO search results..</p>
      ) : initialBooksData ? (
        <Books
          booksData={initialBooksData}
          addToCart={(bookID) => addToCartClickHandler(bookID)}
        />
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}

export default HomePage;
