import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    search: (state, action) => {
      const searchResults = state.initialBooksData
        .filter((book) => String(book.title).includes(action.payload.query))
        .map((booksData) => {
          return booksData;
        });
      const query = action.payload.query ? true : false;
      return {
        ...state,
        ...{ searchResults: searchResults, searched: true, query: query },
      };
    },
    initialSearch: (state, action) => {
      return {
        ...state,
        ...{ searchResults: [] },
      };
    },
    initialFetch: (state, action) => {
      return {
        ...state,
        ...{ initialBooksData: action.payload.initialBooksData, cartItems: [] },
      };
    },
    addToCart: (state, action) => {
      const item = [...state.cartItems, action.payload.bookID];
      return {
        ...state,
        ...{ cartItems: item },
      };
    },
  },
});

export const { search, initialFetch, initialSearch, addToCart } = slice.actions;
export default slice.reducer;
