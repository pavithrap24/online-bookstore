import React from "react";

import "./cartItem.css";
import { Button } from "@material-ui/core";

function CartItem(props) {
  const { bookTitle, numberOfItems } = props;
  return (
    <div className="cartItemDivClass">
      <label className="titileLabel">{bookTitle}</label>
      <Button className="minusButton" variant="contained">
        -
      </Button>
      <label className="numberLabel">{numberOfItems}</label>
      <Button className="plusLabel" variant="contained">
        +
      </Button>
    </div>
  );
}

export default CartItem;
