import React from "react";
import { useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CartItem from "./cartItem/cartItem";

function ShoppingCart(props) {
  const { openPopup, setOpenPopup } = props;
  const { cartItems } = useSelector((state) => state.booksReducer);

  let groupedItems = (key, items) => {
    return items && items.length > 0 ? (
      items.reduce((cache, item) => {
        console.log("cache  ", cache);
        const property = item[key];
        if (property in cache) {
          return { ...cache, [property]: cache[property].concat(item) };
        }
        return { ...cache, [property]: [item] };
      }, {})
    ) : (
      <p>No items in Cart..</p>
    );
  };
  let items = groupedItems("bookID", cartItems);

  const closeDialogue = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <Dialog open={openPopup} maxWidth="md" onClose={() => closeDialogue()}>
        <DialogTitle>Items in Cart</DialogTitle>
        <DialogContent dividers>
          {items ? (
            Object.keys(items).map((key) => {
              const itemArray = items[key];
              return (
                <CartItem
                  key={itemArray[0].bookID}
                  bookTitle={itemArray[0].title}
                  numberOfItems={itemArray.length}
                ></CartItem>
              );
            })
          ) : (
            <p>Cart is Empty.</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ShoppingCart;
