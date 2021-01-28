import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    search: (state, action) => {
      const searchResults = state
        .getState()
        .books.filter((book) =>
          String(book.title).includes(action.payload.query)
        )
        .map((booksData) => {
          return booksData;
        });
      return { ...state, searchResults: searchResults };
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
        ...{ initialBooksData: action.payload.initialBooksData },
      };
    },
  },
});

export const { search, initialFetch, initialSearch } = slice.actions;
export default slice.reducer;
