import React from "react";
import { Input } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./navBar.css";

const navBar = (props) => {
  return (
    <div className="divNavBarClass">
      <Input
        type="text"
        name="searchBook"
        placeholder="search by title of book"
        onChange={props.onChangeSearch}
      />
      <AddShoppingCartIcon />
      <label>
        <b>{props.cartCount}</b>
      </label>
    </div>
  );
};

export default navBar;
