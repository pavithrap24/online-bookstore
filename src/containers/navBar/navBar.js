// import React, { useEffect, useDispatch } from "react";
// import { search, initialFetch, initialSearch } from "../../store/books";
// import { Input } from "@material-ui/core";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import "./navBar.css";

// const NavBar = (props) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(initialSearch());
//     dispatch(initialFetch());
//   }, []);

//   const onChangeSearchHandler = (event) => {
//     dispatch();
//   };

//   return (
//     <div className="divNavBarClass">
//       <Input
//         type="text"
//         name="searchBook"
//         placeholder="search by title of book"
//         onChange={() => onChangeSearchHandler}
//       />
//       <AddShoppingCartIcon />
//       <label>{/* <b>{props.cartCount}</b> */}</label>
//     </div>
//   );
// };

// export default NavBar;
