import React, { useEffect } from "react";
import Books from "../books/books";
import { search, fetchData, initialSearch } from "../../store/books";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const localState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("localState ", localState);

  useEffect(() => {
    // console.log("store ", store);
    const booksData = dispatch(fetchData({ query: "" }));
  }, []);

  const addToCartClickHandler = () => {
    // setCartCount((prevState) => ({
    //   cartCount: prevState.cartCount + 1,
    // }));
  };

  return (
    <div>
      Home Page
      {/* {searchResults.length > 0 ? (
        <Books
          booksData={searchResults}
          addToCart={() => addToCartClickHandler()}
        />
      ) : (
        <Books booksData={books} addToCart={() => addToCartClickHandler()} />
      )} */}
      /// store value cart count
    </div>
  );
}

export default HomePage;
