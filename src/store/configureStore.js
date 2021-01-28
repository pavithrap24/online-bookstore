import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./books";

const allReducers = combineReducers({ booksReducer });

const store = configureStore({ reducer: allReducers });

export default store;
