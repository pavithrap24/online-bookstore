import React from "react";
import { search, initialSearch } from "../../store/books";
import { Input, AppBar, Toolbar } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";

const NavBar = (props) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.booksReducer);

  const onChangeSearchHandler = (event) => {
    dispatch(initialSearch());
    console.log("a", event.target.value);
    dispatch(search({ query: event.target.value }));
  };

  return (
    <div className="divNavBarClass">
      <AppBar className="appBar" color="primary" position="fixed">
        <Toolbar>
          <Input
            type="text"
            name="searchBook"
            placeholder="search by title of book"
            onChange={(event) => onChangeSearchHandler(event)}
          />
          <AddShoppingCartIcon />
          <label>
            <b>{cartItems ? cartItems.length : 0}</b>
          </label>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
