import React, { useEffect } from "react";
import Books from "../books/books";
import { search, initialFetch, initialSearch } from "../../store/books";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  const { initialBooksData } = useSelector((state) => state.booksReducer);
  const { searchResults } = useSelector((state) => state.booksReducer);

  async function getApiData() {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json",
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
  useEffect(() => {
    getApiData();
  }, []);

  const addToCartClickHandler = () => {
    // setCartCount((prevState) => ({
    //   cartCount: prevState.cartCount + 1,
    // }));
  };

  return (
    <div>
      {searchResults ? (
        <Books
          booksData={searchResults}
          addToCart={() => addToCartClickHandler()}
        />
      ) : initialBooksData ? (
        <Books
          booksData={initialBooksData}
          addToCart={() => addToCartClickHandler()}
        />
      ) : (
        <p>No Books</p>
      )}
    </div>
  );
}

export default HomePage;
