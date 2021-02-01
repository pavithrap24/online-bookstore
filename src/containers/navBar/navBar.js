import React, { useState } from "react";
import { search, initialSearch } from "../../store/books";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../shoppingCart/shoppingCart";

import "./navBar.css";
import { Badge, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Input, AppBar, Toolbar, IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const iconButtonTheme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        color: "rgb(0 0 0 / 87%)",
      },
    },
  },
});

const NavBar = (props) => {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);

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
          <ThemeProvider theme={iconButtonTheme}>
            <IconButton
              aria-label="add to shopping cart"
              onClick={() => setOpenPopup(true)}
            >
              <Badge
                badgeContent={cartItems ? cartItems.length : 0}
                color="primary"
                showZero
              >
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      {openPopup ? (
        <ShoppingCart openPopup={openPopup} setOpenPopup={setOpenPopup}>
          {/* <CartItem></CartItem> */}
        </ShoppingCart>
      ) : null}
    </div>
  );
};

export default NavBar;
