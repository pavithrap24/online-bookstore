import { createSlice } from "@reduxjs/toolkit";

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
  const books = jsonData
    .sort((books) => books.average_rating)
    .map((bookData) => {
      return bookData;
    });
  //   await store.getState().push({
  //     books: books,
  //   });
}

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
    initialSearch: (state, action) => {},
    fetchData: (state, action) => getApiData(),
  },
});

export const { search, fetchData, initialSearch } = slice.actions;
export default slice.reducer;
